import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SendGridModule } from "@anchan828/nest-sendgrid";
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { entities } from "../../entities/index";

@Module({
  imports: [
    SendGridModule.forRoot({
      apikey: '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',
    }),
    TypeOrmModule.forFeature(entities)
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
