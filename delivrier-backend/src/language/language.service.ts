import { Injectable, Inject } from '@nestjs/common';
import { Logger } from 'winston';
import { LanguageRepository } from './language.repository';

@Injectable()
export class LanguageService {
  constructor(
    private readonly languageRepository: LanguageRepository,
    @Inject('winston')
    private readonly logger: Logger,
  ) {}

  async getAllLanguages(): Promise<Response> {
    try {
      return await this.languageRepository.getLanguages();
    } catch (e) {
      return Response.error();
    }
  }

  async getTermsLanguage(code: string): Promise<Response> {
    this.logger.info(`Obteniendo Terminos de POEditor, codigo de lenguaje: ${code}`);
    try {
      const responseTerms: any = await this.languageRepository.getTermsLanguage(code);
      if (responseTerms.response.status === 'success') {
        return this.formatTerms(responseTerms.result.terms);
      }
      return Response.error();
    } catch (e) {
      return Response.error();
    }
  }

  formatTerms(terms) {
    const termsLanguages: any = {};
    terms.map(term => {
      termsLanguages[term.term] = term.translation.content;
    });
    return termsLanguages;
  }
}