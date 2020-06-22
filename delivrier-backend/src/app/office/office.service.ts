import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Office } from "../../entities/office.entity";
import { STATUS } from "../../common/constants";
import { Logger } from 'winston';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private officeRepository: Repository<Office>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getAllOffices(): Promise<Office[]>{
      this.logger.info(`getAllOffices`);
      const offices: Office[] = await this.officeRepository.query(`
      SELECT O.clave as "id", O.nombre as "name", O.fk_lugar as "place", L.direccion as "address", L.altitud as "altitude", L.longitud as "longitude", L.zip
        FROM oficina O, estatus_oficina EO, lugar L 
          WHERE O.clave = EO.fk_oficina
		  	    AND L.clave = O.fk_lugar
              AND EO.fecha = (SELECT MAX(EO2.fecha) FROM estatus_oficina EO2 WHERE EO2.fk_oficina = O.clave GROUP BY O.clave )
                AND EO.fk_estatus =  ${STATUS.ACTIVE.id};
      `.trim());
      
      return offices;
  }
}
