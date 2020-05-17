import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { AuthModule } from '../auth/auth.module';
import { WinstonOptions } from "../logger/winstonOptions";
import { UserModule } from './user/user.module';
import { EmailModule } from "../email/email.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(),
    AuthModule,
    WinstonModule.forRoot(WinstonOptions),
    UserModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
