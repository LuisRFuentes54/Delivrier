import { Controller, Get, Res, HttpStatus, Param } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('language')
export class LanguageController {
  constructor(
    private readonly languageService: LanguageService,
  ) {}

  @Get()
  async getAllLanguages(@Res() res) {
    const dataResponse: Response = await this.languageService.getAllLanguages();
    return res.status(HttpStatus.OK).send(dataResponse);
  }

  @Get('/terms/:code')
  async getTermsLanguage(@Res() res, @Param('code') code: string ) {
    const dataResponse = await this.languageService.getTermsLanguage(code);
    return res.status(HttpStatus.OK).send({ term: dataResponse});
  }

}