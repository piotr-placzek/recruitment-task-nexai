import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();

  const swaggerDocumentBuilder = new DocumentBuilder()
    .setTitle('rent car api')
    .setDescription('rent car api description')
    .setVersion('1.0')
    .addServer('http://localhost:3000/api', 'localhost')
    .addServer('http://localhost:3001/api', 'dockerhost');

  const swaggerDocument = SwaggerModule.createDocument(
    app,
    swaggerDocumentBuilder.build(),
    { ignoreGlobalPrefix: true },
  );

  SwaggerModule.setup('swagger-ui', app, swaggerDocument);
  await app.listen(3000);
}
bootstrap();
