import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';
import { entities } from "../../entities/index";

@Module({
  imports: [
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [TrackingController],
  providers: [TrackingService]
})
export class TrackingModule {}
