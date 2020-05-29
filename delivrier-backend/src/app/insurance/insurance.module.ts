import { Module } from '@nestjs/common';
import { InsuranceController } from './insurance.controller';
import { InsuranceService } from './insurance.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from "../../entities/index";

@Module({
  imports:[
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [InsuranceController],
  providers: [InsuranceService],
  exports: [InsuranceService]
})
export class InsuranceModule {}
