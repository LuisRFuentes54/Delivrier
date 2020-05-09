import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';
import { WinstonModule } from 'nest-winston';
import { WinstonOptions } from "../logger/winstonOptions";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    WinstonModule.forRoot(WinstonOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
