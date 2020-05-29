import { Module, HttpModule, OnModuleInit } from '@nestjs/common';
import { BotController } from './bot.controller';
import { BotService } from './bot.service';
import { TrackingModule } from '../tracking/tracking.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [BotController],
  providers: [BotService],
  imports: [TrackingModule, HttpModule, ConfigModule],
  exports: [BotService]
})
export class BotModule{}
