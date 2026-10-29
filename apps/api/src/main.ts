import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './module';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors({ origin: process.env.CORS_ORIGIN ?? 'http://localhost:5173' });
  await app.listen(Number(process.env.PORT ?? 3001));
}
void bootstrap();
