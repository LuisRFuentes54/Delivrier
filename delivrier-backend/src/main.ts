import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('delivrier/api/v1');

  app.use(helmet());

  app.enableCors({
    origin: '*',
    methods: ['GET', 'PATCH', 'DELETE', 'POST'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  });

  await app.listen(3000);

  console.log(`Delivrier-Back-End is running on: ${await app.getUrl()}`);
}
bootstrap();
