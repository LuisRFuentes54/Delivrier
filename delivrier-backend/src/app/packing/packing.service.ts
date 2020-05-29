import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Packing } from "../../entities/packing.entity";
import { STATUS } from "../../common/constants";
import { Logger } from 'winston';

@Injectable()
export class PackingService {
  constructor(
    @InjectRepository(Packing)
    private packingRepository: Repository<Packing>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getAllPackings(): Promise<Packing[]>{
      this.logger.info(`getAllPackings`);
      const packings: Packing[] = await this.packingRepository.query(`
      SELECT E.clave as "id", E.nombre as "name", E.descripcion as "description", E.alto as "heigth", E.ancho as "width", E.largo as "large", E.precio as "price" 
        FROM empaque E, estatus_empaque ES
          WHERE E.clave = ES.fk_empaque 
            AND ES.fecha = (SELECT MAX(ES2.fecha) FROM estatus_empaque ES2 WHERE ES2.fk_empaque = E.clave GROUP BY E.clave )
              AND ES.fk_estatus = ${STATUS.ACTIVE.id};
      `.trim());
      return packings;
  }
}
