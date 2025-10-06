import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist:true,//it will remove any extra fields that are not defined in DTO
    forbidNonWhitelisted:true,//it will throw an error if any extra fields are present
  }))
  await app.listen(process.env.PORT ?? 3000);
  app.enableShutdownHooks();//to enable shutdown hooks like onApplicationShutdown
}
bootstrap();
