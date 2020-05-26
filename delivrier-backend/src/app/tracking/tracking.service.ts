import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, getManager } from 'typeorm';
import { Shipping } from "../../entities/shipping.entity";
import { Logger } from 'winston';

@Injectable()
export class TrackingService {
  constructor(
    @InjectRepository(Shipping)
    private shippingRepository: Repository<Shipping>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getShippingByTrackingNumber(numberTrack: number): Promise<Shipping>{
    this.logger.info(`Extrayendo la información del envío Nro:${numberTrack}`);
    const ship = await this.shippingRepository.findOne({
      where: { nLocalitation: numberTrack },
      relations: ['user','user.personClient','personDestinatary','packs','packs.paramsPack','packs.paramsPack.param','packs.packing','insurance','shippingType','roads','roads.initialPlace','roads.endingPlace','roads.initialOffice','roads.initialOffice.place']
    });
    return ship;
  }
}
