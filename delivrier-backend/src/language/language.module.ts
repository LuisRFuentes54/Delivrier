import { HttpModule, Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { LanguageController } from './language.controller';
import { LanguageService } from './language.service';
import { LanguageRepository } from "./language.repository";

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [LanguageController],
  providers: [LanguageService, LanguageRepository]
})
export class LanguageModule {}
