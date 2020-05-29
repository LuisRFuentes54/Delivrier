import { Module } from '@nestjs/common';
import { ParameterController } from './parameter.controller';
import { ParameterService } from './parameter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from "../../entities/index";

@Module({
  imports:[
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [ParameterController],
  providers: [ParameterService],
  exports: [ParameterService]
})
export class ParameterModule {}
