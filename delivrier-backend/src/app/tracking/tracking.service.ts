import { Injectable, Inject } from '@nestjs/common';
import { TrackingRepository } from "./tracking.repository";

@Injectable()
export class TrackingService {
  constructor(
    private readonly trackingRepository: TrackingRepository,
  ){}

  async getShippingByTrackingNumber(numberTrack: number) {
    return await this.trackingRepository.getShippingByTrackingNumber(numberTrack);
  }

  async getShippingStatusInfoByNumber(numberTrack: number) {
    return await this.trackingRepository.getShippingStatusInfoByNumber(numberTrack);
  }
}
