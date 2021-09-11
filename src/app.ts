import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { connect } from './extensions/dbConnection';
import { LoggingInterceptor } from './extensions/log.interceptor';
import { TransformInterceptor } from './extensions/transform.interceptor';
 
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}

connect();
bootstrap();

