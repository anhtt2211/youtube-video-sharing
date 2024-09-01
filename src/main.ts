import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');

  // Enable CORS
  app.enableCors({
    origin: configService.get<string>('CORS_ORIGIN') || '*', // Allow specific domain or all if not set
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(
    parseInt(configService.get<string>('PORT', '8000'), 10),
    '0.0.0.0',
  );
}
bootstrap();
