import { Module } from '@nestjs/common';
import { PackingController } from './packing.controller';
import { PackingService } from './packing.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { entities } from "../../entities/index";

@Module({
  imports:[
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [PackingController],
  providers: [PackingService],
  exports: [PackingService]
})
export class PackingModule {}
