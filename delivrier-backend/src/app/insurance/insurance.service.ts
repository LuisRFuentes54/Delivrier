import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Insurance } from "../../entities/insurance.entity";
import { STATUS } from "../../common/constants";
import { Logger } from 'winston';

@Injectable()
export class InsuranceService {
  constructor(
    @InjectRepository(Insurance)
    private insuranceRepository: Repository<Insurance>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getAllInsurances(): Promise<Insurance[]>{
      this.logger.info(`getAllInsurances`);
      const insurances: Insurance[] = await this.insuranceRepository.query(`
      SELECT S.clave as "id", S.nombre as "name", S.descripcion as "description", S.tarifa as "baseFare", S.tarifa_max_devolucion as "maxRefundFare" 
        FROM seguro S, estatus_seguro ES
          WHERE S.clave = ES.fk_seguro 
            AND ES.fecha = (SELECT MAX(ES2.fecha) FROM estatus_seguro ES2 WHERE ES2.fk_seguro = S.clave GROUP BY S.clave )
              AND ES.fk_estatus = ${STATUS.ACTIVE.id};
      `.trim());
    
      return insurances;
  }
}
