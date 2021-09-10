import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from './extensions/dbConnection';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

connect();
bootstrap();

