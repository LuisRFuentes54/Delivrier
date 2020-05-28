import { HttpService, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';

@Injectable()
export class LanguageRepository {
  constructor(
    private readonly httpService: HttpService,
  ) {}

  async getLanguages() {
    try {
      const headersRequest = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const response =  await this.httpService.post(
        `https://poeditor.com/api/`,
        `api_token=${process.env.POE_EDITOR_API_KEY}&id=${process.env.POE_EDITOR_PROJECT_ID}&action=list_languages`,
        {headers: headersRequest},
      ).pipe(map(response => response.data)).toPromise();
      return response;
    } catch (e) {
      return Response.error();
    }
  }

  async getTermsLanguage(code: string) {
    try {
      const headersRequest = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const response =  await this.httpService.post(
        `https://api.poeditor.com/v2/terms/list`,
        `api_token=${process.env.POE_EDITOR_API_KEY}&id=${process.env.POE_EDITOR_PROJECT_ID}&language=${code}`,
        {headers: headersRequest},
      ).pipe(map(response => response.data)).toPromise();
      return response;
    } catch (e) {
      return Response.error();
    }
  }
}