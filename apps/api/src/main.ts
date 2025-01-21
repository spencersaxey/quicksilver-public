import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './util/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  console.log(`Nest.js API listening on PORT: ${PORT}`);
  await app.listen(PORT);
}
bootstrap();
