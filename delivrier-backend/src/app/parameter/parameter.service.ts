import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Parameter } from "../../entities/parameter.entity";
import { STATUS } from "../../common/constants";
import { Logger } from 'winston';
@Injectable()
export class ParameterService {
  constructor(
    @InjectRepository(Parameter)
    private parameterRepository: Repository<Parameter>,
    @Inject('winston')
    private readonly logger: Logger,
  ){}

  async getAllParameters(): Promise<Parameter[]>{
      this.logger.info(`getAllParameters`);
      const parameters: Parameter[] = await this.parameterRepository.query(`SELECT clave as "id", nombre as "name", unidad as "unit", tipo as "type",
      valor_maximo as "maxValue", valor_minimo "minValue", fk_parametro as "param"
      FROM parametro;`.trim());
      return parameters;
  }
}
