import { Injectable, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { TrackingRepository } from "./tracking.repository";
import { EmailService } from "../../email/email.service";

@Injectable()
export class TrackingService {
  constructor(
    private readonly trackingRepository: TrackingRepository,
    private readonly emailService: EmailService,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getShippingByTrackingNumber(numberTrack: number) {
    this.logger.info(`[TrackingService] Obtaining the information about the shipment number [${numberTrack}]`)
    return await this.trackingRepository.getShippingByTrackingNumber(numberTrack);
  }

  async getShippingStatusInfoByNumber(numberTrack: number) {
    this.logger.info(`[TrackingService] Obtaining the status and current location of the shipment number [${numberTrack}]`)
    return await this.trackingRepository.getShippingStatusInfoByNumber(numberTrack);
  }

  async sendInvoiceByEmail(numberTrack: number, file) {
    this.logger.info(`[TrackingService] Obtaining shipping information, numberTrack [${numberTrack}]`)
    const track = await this.trackingRepository.getShippingByTrackingNumber(numberTrack);
    if(track){
      const username = track.user.username;
      const email = track.user.personClient.email;
      await this.emailService.sendInvoiceByEmail(file, email, username, numberTrack);
    }
    else{
      this.logger.error(`[TrackingService] Shipping number [${numberTrack}] is not registered in our database`)
    }
  }
}
