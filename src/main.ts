import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  await app.listen(
    parseInt(configService.get<string>('PORT', '8000'), 10),
    '0.0.0.0',
  );
}
bootstrap();
