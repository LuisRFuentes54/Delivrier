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
import { ShippingTypeModule } from './shipping-type/shipping-type.module';
import { OfficeModule } from './office/office.module';
import { InsuranceModule } from './insurance/insurance.module';
import { PackingModule } from './packing/packing.module';
import { ParameterModule } from './parameter/parameter.module';
import { ShippingModule } from './shipping/shipping.module';
import { LanguageModule } from "../language/language.module";
import { TrackingModule } from './tracking/tracking.module';


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
    ShippingTypeModule,
    OfficeModule,
    InsuranceModule,
    PackingModule,
    ParameterModule,
    ShippingModule,
    LanguageModule,
    TrackingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
