import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Interview Helper Api')
    .setDescription('Play with endpoints')
    .setVersion('1.0')
    .build();
  /**
   * TODO: Review
   * https://docs.nestjs.com/openapi/introduction
   * document (returned by the SwaggerModule#createDocument() method)
   * is a serializable object conforming to OpenAPI Document.
   * Instead of hosting it via HTTP, you could also save it
   * as a JSON/YAML file, and consume it in different ways.
   */
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      // transform: true,
      // whitelist: true,
      // stopAtFirstError: true,
    }),
  );

  await app.listen(process.env.port || 3000);
}
bootstrap();
