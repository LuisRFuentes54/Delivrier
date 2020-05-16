import { Module } from '@nestjs/common';
import { SendGridModule } from "@anchan828/nest-sendgrid";
import { EmailService } from './email.service';

@Module({
  imports: [
    SendGridModule.forRoot({
      apikey: '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',
    }),
  ],
  providers: [EmailService],
  exports: [EmailService]
})
export class EmailModule {}
