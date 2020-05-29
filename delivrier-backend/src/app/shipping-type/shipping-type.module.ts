import { Module } from '@nestjs/common';
import { ShippingTypeController } from './shipping-type.controller';
import { ShippingTypeService } from './shipping-type.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from "../../entities/index";

@Module({
  imports:[
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [ShippingTypeController],
  providers: [ShippingTypeService],
  exports: [ShippingTypeService]
})
export class ShippingTypeModule {}
