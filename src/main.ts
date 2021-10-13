import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as config from 'config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  const serverConfig = config.get('server');
  if (serverConfig.env === 'development') {
    app.enableCors();
  } else if (serverConfig.env === 'production') {
    app.enableCors({ origin: serverConfig.env || serverConfig.origin });
  }
  app.setGlobalPrefix('api');

  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 4000);
  console.log('======== ENVIROMENT ========:', serverConfig.env);
  console.log('======== PORT ==============:', serverConfig.port);
  console.log('======== ORIGIN ==============:', serverConfig.origin);
}
bootstrap();
