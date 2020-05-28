import { Module } from '@nestjs/common';
import { ShippingController } from './shipping.controller';
import { ShippingService } from './shipping.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from "../../entities/index";

@Module({
  imports:[
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [ShippingController],
  providers: [ShippingService]
})
export class ShippingModule {}
