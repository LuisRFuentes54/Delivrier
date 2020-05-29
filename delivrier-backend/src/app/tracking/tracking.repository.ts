import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, getManager } from 'typeorm';
import { Shipping } from "../../entities/shipping.entity";
import { ShippingStatus } from "../../entities/shippingStatus.entity";
import { Road } from "../../entities/road.entity";
import { Logger } from 'winston';

@Injectable()
export class TrackingRepository {
  constructor(
    @InjectRepository(Shipping)
    private shippingRepository: Repository<Shipping>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getShippingByTrackingNumber(numberTrack: number): Promise<Shipping>{
    this.logger.info(`Extrayendo la información del envío Nro:${numberTrack}`);
    const ship : Shipping = await this.shippingRepository.findOne({
      where: { nLocalitation: numberTrack },
      relations: ['user','user.personClient','personDestinatary','packs','packs.paramsPack','packs.paramsPack.param','packs.packing','insurance','shippingType','roads','roads.initialPlace','roads.endingPlace','roads.initialOffice','roads.initialOffice.place']
    });
    return ship;
  }

  findStatus(name: string, status): boolean {
    let result = false;
    status.forEach(stat => {
      if (stat.status.name === name){
        result = true;
      }
    });
    return result
  }

  getActualStatus(status): string {
    if (this.findStatus("Delivered",status))
      return "Delivered"
    else if (this.findStatus("In Transit",status))
      return "In Transit"
    else if (this.findStatus("Out for Delivery",status))
      return "Out for Delivery"
    else
      return "Active"
  }

  count(arr) {
    let count = 0
    arr.forEach(a => {
      count++;
    });
    return count;
  }

  makeLineTime(statusInfo: ShippingStatus[],roads: Road[], actualStatus: string) {
    let counter = 0;
    let counterStatus = this.count(statusInfo);
    let counterRoad = this.count(roads);
    let lineTime = [];
    if(actualStatus === "Out for Delivery"){
      lineTime.push({
        road: roads[0],
        status: "Out for Delivery"
      });
      lineTime.push({
        road: roads[1],
        status: "In transit"
      })
    }
    else if (actualStatus === "In Transit"){
      let i = 1
      while (i < counterStatus){
        counter = lineTime.push({
          road: roads[counter],
          status: statusInfo[i].status.name
        })
        i++
      };
      counter = lineTime.push({
        road: roads[counter],
        status: "In Transit"
      });
      i = 1;
      while (i < counter - 1){
        lineTime[i].status = "Checkpoint reached";
        i++
      }
    }
    else{
      roads.forEach(road => {
        counter = lineTime.push({
          road: road,
          status: "Checkpoint reached"
        })
      });
      lineTime[0].status = "Out for Delivery",
      lineTime[counter-1].status = "Delivered"
    }
    return lineTime;
  }

  async getShippingStatusInfoByNumber(numberTrack: number) {
    const ship : Shipping = await this.shippingRepository.findOne({
      where: { nLocalitation: numberTrack },
      relations: ['shippingStatus','shippingStatus.status','roads','roads.initialPlace','roads.endingPlace','roads.initialOffice','roads.initialOffice.place']
    });
    if (ship) {
      const actualStatus = this.getActualStatus(ship.shippingStatus);
      if (actualStatus !== "Active"){
        const lineTime = this.makeLineTime(ship.shippingStatus,ship.roads,actualStatus)
        const resp = {
          actualStatus: actualStatus,
          status: [
            "Out for Delivery",
            "In transit",
            "Delivered"
          ],
          numberTrack: ship.nLocalitation,
          roads: ship.roads,
          lineTime: lineTime
        }
        return resp;
      }
      else{
        return "El envió no ha salido de la oficina"
      }
    }
    else{
      return "El envío no se encuentra en los registros"
    }
  }
}
