import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { SendGridModule } from "@anchan828/nest-sendgrid";
import { EmailService } from './email.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SendGridModule.forRoot({
      apikey: process.env.SENDGRID_API_KEY,
    }),
  ],
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule {}
