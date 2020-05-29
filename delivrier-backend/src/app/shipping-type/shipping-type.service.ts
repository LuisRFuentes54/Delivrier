import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { ShippingType } from "../../entities/shippingType.entity";
import { STATUS } from "../../common/constants";
import { Logger } from 'winston';


@Injectable()
export class ShippingTypeService {
  constructor(
    @InjectRepository(ShippingType)
    private shippingTypeRepository: Repository<ShippingType>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getAllShippingTypes(): Promise<ShippingType[]>{
      this.logger.info(`getAllShippingTypes`);
      const shippingTypes: ShippingType[] = await this.shippingTypeRepository.query(`
      SELECT TE.clave as "id", TE.nombre as "name", TE.descripcion as "description", TE.tarifa_base as "baseFare"
        FROM tipo_envio TE, estatus_tipo_envio ETE 
          WHERE TE.clave = ETE.fk_tipo_envio 
            AND ETE.fecha = (SELECT MAX(ETE2.fecha) FROM estatus_tipo_envio ETE2 WHERE ETE2.fk_tipo_envio = TE.clave GROUP BY TE.clave )
              AND ETE.fk_estatus = ${STATUS.ACTIVE.id};
      `.trim());
    
      return shippingTypes;
  }
}
