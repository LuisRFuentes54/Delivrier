import { Injectable, Inject, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,getManager, TransactionRepository} from 'typeorm';
import { Office } from "../../entities/office.entity";
import { STATUS } from "../../common/constants";
import { Logger } from 'winston';
import { CreateShipping } from "../../dto/createShipping.dto";

import { PersonDestinatary } from "../../entities/personDestinatary.entity";
import { PersonDestinataryStatus } from "../../entities/personDestinataryStatus.entity";
import { Status } from "../../entities/status.entity";
import { PersonClient } from "../../entities/personClient.entity";
import { Shipping } from "../../entities/shipping.entity";
import { ShippingStatus } from "../../entities/shippingStatus.entity";
import { Insurance } from "../../entities/insurance.entity";
import { Pack } from "../../entities/pack.entity";
import { Packing } from "../../entities/packing.entity";
import { User } from "../../entities/user.entity";
import { ShippingType } from "../../entities/shippingType.entity";
import { Parameter } from "../../entities/parameter.entity";
import { ParameterPack } from "../../entities/parameterPack.entity";
import { ParameterShipping } from "../../entities/parameterShipping.entity";
import { SimulationConfig } from "../../entities/simulationConfig.entity";
import { Place } from "../../entities/place.entity";
import { Road } from "../../entities/road.entity";

@Injectable()
export class ShippingService {
  constructor(
    @InjectRepository(Status)
    private statusRepository: Repository<Status>,
    @InjectRepository(SimulationConfig)
    private simulationConfigRepository: Repository<SimulationConfig>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async createShipping(shipping: CreateShipping): Promise<void> {
    this.logger.info(`Shipping Module: [createShipping | Registrando información de envío]`);
    return await getManager().transaction(async transactionalEntityManager => {
        let personDestinataryId;
        if(!shipping.personDestinataryId){
          personDestinataryId = await this.createPersonDestinatary({}, shipping.personDestinatary.firstName, shipping.personDestinatary.secondName,shipping.personDestinatary.firstLastName, shipping.personDestinatary.secondLastName, shipping.personDestinatary.phoneNumber, shipping.personDestinatary.email, shipping.personClientId, transactionalEntityManager);
          await this.createPersonDestinataryStatus({},personDestinataryId, STATUS.ACTIVE.id , transactionalEntityManager);
        }
        else{
          personDestinataryId = shipping.personDestinataryId;
        }
        let shippingId = await this.insertShipping({}, shipping.shippmentTrackingNumber,shipping.userId, shipping.insuranceId, personDestinataryId, shipping.shippingPlanId, 1, transactionalEntityManager)
        await this.createShippingStatus({}, shippingId, STATUS.ACTIVE.id, transactionalEntityManager);
        for await (let pack of shipping.packages){
          let packageId = await this.createPackage({}, pack.description, shippingId, pack.packing, transactionalEntityManager);
          for await (let parameter of pack.parameters){
            await this.createParameterPack({}, parameter.value, parameter.id, packageId, transactionalEntityManager)
          };
        };
        await this.createParameterShipping({}, shipping.packageQuantity.value, shipping.packageQuantity.id, shippingId, transactionalEntityManager)
        let routes = [];
        let i = 0;
        for await(let shippingRoute of shipping.route){
          let placeId;
          if(i){
            placeId = await this.createPlace({}, shippingRoute.name, shippingRoute.lon, shippingRoute.lat, shippingRoute.zip, transactionalEntityManager);
          }
          let route = {};
          if(i!= shipping.route.length -1){
            route = {
              initialDate: shippingRoute.initialDate,
              endingDate: shippingRoute.finalDate,
              distance: shippingRoute.distance,
              initialPlaceId: i? placeId : null,
              initialOfficeId: i? null: shipping.officeId,
              endingPlaceId: null,
              roadId: null
            }
          }
          
          if(i){
            routes[i-1].endingPlaceId = placeId;
          }
          if(i!= shipping.route.length -1){
            routes.push(route);
          }
          i++;
        }
        for await (let route of routes){
          let routeId = await this.createRoute({}, shippingId, route.distance, route.initialOfficeId, route.initialPlaceId, route.endingPlaceId, null, null, transactionalEntityManager)
          route.roadId = routeId;
        }
    });
  }

  async createPersonDestinatary(newPersonDestinatary: Partial<PersonDestinatary>,firstName:string, secondName: string,firstLastName: string, secondLastName:string, phoneNumber:string, email:string, personClientId:number,transactionalEntityManager):Promise<number>{
    this.logger.info(`ShippingModule | createPersonDestinatary [Registrando un nuevo destinatario para el cliente | personClientId:${personClientId}]`);
    const personDestinataryTransactionRepository: Repository<PersonDestinatary> = transactionalEntityManager.getRepository(
      PersonDestinatary,
    );
    const personClientTransactionRepository: Repository<PersonClient> = transactionalEntityManager.getRepository(
      PersonClient,
    );
    try{
      newPersonDestinatary.personClient = await personClientTransactionRepository.findOne(personClientId);
      
      newPersonDestinatary.firstName = firstName;
      newPersonDestinatary.secondName = secondName;
      newPersonDestinatary.firstLastName = firstLastName;
      newPersonDestinatary.secondLastName = secondLastName;
      newPersonDestinatary.phoneNumber = phoneNumber;
      newPersonDestinatary.email = email;
      const insertedPersonDestinatary : PersonDestinatary = await personDestinataryTransactionRepository.save(newPersonDestinatary);
      return insertedPersonDestinatary.id;
    }
    catch(ex){
      this.logger.error(`Fallo en la creación de persona destinatario, no se pudo crear la persona: [${JSON.stringify(newPersonDestinatary)}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
   
  }

  async createPersonDestinataryStatus(personDestinataryStatus: Partial<PersonDestinataryStatus>, newPersonDestinataryId: number, statusId: number, transactionalEntityManager):Promise<void>{
    this.logger.info(`ShippingModule | createPersonDestinataryStatus [Registrando un nuevo status para el destinatario | personDestinatary.id: ${newPersonDestinataryId} | status.id: ${statusId}]`);
    const personDestinataryStatusTransactionRepository: Repository<PersonDestinataryStatus> = transactionalEntityManager.getRepository(
      PersonDestinataryStatus,
    );
    const personDestinataryTransactionRepository: Repository<PersonDestinatary> = transactionalEntityManager.getRepository(
      PersonDestinatary,
    );
    try{
      personDestinataryStatus.personDestinatary = await personDestinataryTransactionRepository.findOne(newPersonDestinataryId);
      personDestinataryStatus.status = await this.statusRepository.findOne(statusId);
      personDestinataryStatus.date = new Date().toJSON();
      await personDestinataryStatusTransactionRepository.save(personDestinataryStatus);
    }
    catch(ex){
      this.logger.error(`Fallo en la creación del estatus de la persona destinatario: [${newPersonDestinataryId}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
  }

  async insertShipping(newShipping: Partial<Shipping>, trackingNumber: number, userId: number, insuranceId: number, personDestinataryId: number, shippingTypeId: number,  simulationConfigId: number, transactionalEntityManager):Promise<number>{
    this.logger.info(`ShippingModule | insertShipping [Registrando un nuevo envío | user.id: ${userId} | insurance.id: ${insuranceId} | personDestinatary.id: ${personDestinataryId} | shippingType.id: ${shippingTypeId} | simulationConfig.id: ${simulationConfigId}]`);
    const shippingTransactionRepository: Repository<Shipping> = transactionalEntityManager.getRepository(
      Shipping,
    );
    
    const userTransactionRepository: Repository<User> = transactionalEntityManager.getRepository(
      User,
    );
    
    const insuranceTransactionRepository: Repository<Insurance> = transactionalEntityManager.getRepository(
      Insurance,
    );
    
    const personDestinataryTransactionRepository: Repository<PersonDestinatary> = transactionalEntityManager.getRepository(
      PersonDestinatary,
    );
    
    const shippingTypeTransactionRepository: Repository<ShippingType> = transactionalEntityManager.getRepository(
      ShippingType,
    );
    
    const simulationConfigTransactionRepository: Repository<SimulationConfig> = transactionalEntityManager.getRepository(
      SimulationConfig,
    );
    try{
      newShipping.nLocalitation = trackingNumber;
      newShipping.user = await userTransactionRepository.findOne(userId);
      newShipping.insurance = insuranceId? await insuranceTransactionRepository.findOne(insuranceId): null;
      newShipping.personDestinatary = await personDestinataryTransactionRepository.findOne(personDestinataryId);
      newShipping.shippingType = await shippingTypeTransactionRepository.findOne(shippingTypeId);
      newShipping.simulationConfig = await simulationConfigTransactionRepository.findOne(simulationConfigId);
      const insertedShipping : Shipping = await shippingTransactionRepository.save(newShipping);
      return insertedShipping.id;
    }
    catch(ex){
      this.logger.error(`Fallo en la inserción del envío: [ user.id: ${userId} | insurance.id: ${insuranceId} | personDestinatary.id: ${personDestinataryId} | shippingType.id: ${shippingTypeId} | simulationConfig.id: ${simulationConfigId}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
  }

  async createShippingStatus(shippingStatus: Partial<ShippingStatus>, newShippingId: number, statusId: number, transactionalEntityManager):Promise<void>{
    this.logger.info(`ShippingModule | createShippingStatus [Registrando un nuevo status para el envío | shipping.id: ${newShippingId} | status.id: ${statusId}]`);
    const shippingStatusTransactionRepository: Repository<ShippingStatus> = transactionalEntityManager.getRepository(
      ShippingStatus,
    );
    const shippingTransactionRepository: Repository<Shipping> = transactionalEntityManager.getRepository(
      Shipping,
    );
    try{
      shippingStatus.shipping = await shippingTransactionRepository.findOne(newShippingId);
      shippingStatus.status = await this.statusRepository.findOne(statusId);
      shippingStatus.date = new Date().toJSON();
      await shippingStatusTransactionRepository.save(shippingStatus);
    }
    catch(ex){
      this.logger.error(`Fallo en la creación del estatus del envío: [ shipping.id: ${newShippingId} | status.id: ${statusId}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
    
  }

  async createPackage(pack: Partial<Pack>, description: string, shippingId: number, packingId: number, transactionalEntityManager):Promise<number>{
    this.logger.info(`ShippingModule | createPackage [Registrando un nuevo paquete | shipping.id: ${shippingId} | packing.id: ${packingId}]`);
    const packTransactionRepository: Repository<Pack> = transactionalEntityManager.getRepository(
      Pack,
    );
    const shippingTransactionRepository: Repository<Shipping> = transactionalEntityManager.getRepository(
      Shipping,
    );
    const packingTransactionRepository: Repository<Packing> = transactionalEntityManager.getRepository(
      Packing,
    );
    try{
      pack.shipping = await shippingTransactionRepository.findOne(shippingId);
      pack.packing = packingId ? await packingTransactionRepository.findOne(packingId): null;
      pack.description = description;
      const insertedPack : Pack= await packTransactionRepository.save(pack);
      return insertedPack.id;
    }
    catch(ex){
      this.logger.error(`Fallo en la creación del paquete: [ description: ${description} | shipping.id: ${shippingId} | packing.id: ${packingId}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
    
  }

  async createParameterPack(parameterPack: Partial<ParameterPack>, value: number, parameterId: number, packId: number, transactionalEntityManager):Promise<void>{
    this.logger.info(`ShippingModule | createParameterPack [Registrando un valor parámetro-paquete | parameter.id: ${parameterId} | pack.id: ${packId} | value: ${value}]`);
    const parameterPackTransactionRepository: Repository<ParameterPack> = transactionalEntityManager.getRepository(
      ParameterPack,
    );
    const parameterTransactionRepository: Repository<Parameter> = transactionalEntityManager.getRepository(
      Parameter,
    );
    const packTransactionRepository: Repository<Pack> = transactionalEntityManager.getRepository(
      Pack,
    );
    try{
      parameterPack.param = await parameterTransactionRepository.findOne(parameterId);
      parameterPack.pack = await packTransactionRepository.findOne(packId);
      parameterPack.value = value;
      await parameterPackTransactionRepository.save(parameterPack);
    }
    catch(ex){
      this.logger.error(`Fallo en la inserción de los parámetros del paquete: [  parameter.id: ${parameterId} | pack.id: ${packId} | value: ${value}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
    
  }
  async createParameterShipping(parameterShipping: Partial<ParameterShipping>, value: number, parameterId: number, shippingId: number, transactionalEntityManager):Promise<void>{
    this.logger.info(`ShippingModule | createParameterShipping [Registrando un valor parámetro-paquete | parameter.id: ${parameterId} | shipping.id: ${shippingId} | value: ${value}]`);
    const parameterShippingTransactionRepository: Repository<ParameterShipping> = transactionalEntityManager.getRepository(
      ParameterShipping,
    );
    const parameterTransactionRepository: Repository<Parameter> = transactionalEntityManager.getRepository(
      Parameter,
    );
    const shippingTransactionRepository: Repository<Shipping> = transactionalEntityManager.getRepository(
      Shipping,
    );
    try{
      parameterShipping.param = await parameterTransactionRepository.findOne(parameterId);
      parameterShipping.shipping = await shippingTransactionRepository.findOne(shippingId);
      parameterShipping.value = value;
      await parameterShippingTransactionRepository.save(parameterShipping);
    }
    catch(ex){
      this.logger.error(`Fallo en la inserción del parámetro del envío: [  parameter.id: ${parameterId} | shipping.id: ${shippingId} | value: ${value}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
    
  }
  async createPlace(place: Partial<Place>, name: string, lon: number, lat:number, zip:number|null,transactionalEntityManager):Promise<number>{
    this.logger.info(`ShippingModule | createPlace [Registrando un nuevo lugar perteneciente a una ruta | place.address: ${name} | place.longitude: ${lon} | place.latitude: ${lat} | place.zip: ${zip}]`);
    const placeTransactionRepository: Repository<Place> = transactionalEntityManager.getRepository(
      Place,
    );
    try{
      place.address = name;
      place.altitude = lat;
      place.longitude = lon;
      place.zip = zip;
      const insertedPlace : Place = await placeTransactionRepository.save(place);
      return insertedPlace.id;
    }
    catch(ex){
      this.logger.error(`Fallo en la inserción de los lugares del trayecto del envío: [ place.address: ${name} | place.longitude: ${lon} | place.latitude: ${lat} | place.zip: ${zip} ] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
   
  }
  async createRoute(road: Partial<Road>, newShippingId: number, distance: number, initialOfficeId:number | null, initialPlaceId: number | null, endingPlaceId: number, initialDate: string | null, endingDate: string | null, transactionalEntityManager):Promise<number>{
    this.logger.info(`ShippingModule | createRoute [Registrando un nuevo trayecto | shipping.id: ${newShippingId} | office.id: ${initialOfficeId} | initialPlace.id: ${initialPlaceId}]`);
    const roadTransactionRepository: Repository<Road> = transactionalEntityManager.getRepository(
      Road,
    );
    const shippingTransactionRepository: Repository<Shipping> = transactionalEntityManager.getRepository(
      Shipping,
    );
    const placeTransactionRepository: Repository<Place> = transactionalEntityManager.getRepository(
      Place,
    );
    const officeTransactionRepository: Repository<Office> = transactionalEntityManager.getRepository(
      Office,
    );
    try{
      road.shipping = await shippingTransactionRepository.findOne(newShippingId);
      road.initialPlace = initialPlaceId? await placeTransactionRepository.findOne(initialPlaceId):null;
      road.endingPlace = await placeTransactionRepository.findOne(endingPlaceId);
      road.initialDate = initialDate;
      road.endingDate = endingDate;
      road.distance = distance;
      road.initialOffice = initialOfficeId? await officeTransactionRepository.findOne(initialOfficeId): null;
      
      const insertedRoad : Road = await roadTransactionRepository.save(road);
      return insertedRoad.id;
    }
    catch(ex){
      this.logger.error(`Fallo en la inserción de un trayecto del envío: [ shipping.id: ${newShippingId} | office.id: ${initialOfficeId} | initialPlace.id: ${initialPlaceId}] | Exception: ex=${ex}`);
      throw new InternalServerErrorException(`Error Interno en la creación del envío`);
    }
    
  }

  async getShippingSimulationDelay(){
    const simulationConfig: SimulationConfig = await this.simulationConfigRepository.findOne(1);
    return simulationConfig;
  }
}
