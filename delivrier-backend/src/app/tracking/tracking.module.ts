import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrackingController } from './tracking.controller';
import { TrackingService } from './tracking.service';
import { TrackingRepository } from "./tracking.repository";
import { EmailModule } from "../../email/email.module";
import { entities } from "../../entities/index";

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [TrackingController],
  providers: [TrackingService, TrackingRepository],
  exports: [TrackingService]
})
export class TrackingModule {}
