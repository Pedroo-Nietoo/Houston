/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common/pipes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true
    })
  )

  const config = new DocumentBuilder()
    .setTitle('API - Houston 🚀')
    .setDescription('API de usuários e atividades do projeto Houston')
    .setVersion('1.0')
    .setLicense('MIT', 'https://opensource.org/license/mit/')
    .setTermsOfService('termsOfService')
    .addBearerAuth()
    .setContact(
      'Pedro Henrique Nieto da Silva',
      'https://github.com/Pedroo-Nietoo',
      'pedronieto.2005@gmail.com')

    .addTag('Usuário', 'Tudo sobre os usuários', {
      description: 'Saiba mais',
      url: 'https://github.com/Pedroo-Nietoo/Houston',
    })
    .addTag('Atividade', 'Tudo sobre as atividades', {
      description: 'Saiba mais',
      url: 'https://github.com/Pedroo-Nietoo/Houston',
    })
    .addTag('Hábito', 'Tudo sobre os hábitos', {
      description: 'Saiba mais',
      url: 'https://github.com/Pedroo-Nietoo/Houston',
    })
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(3000);
}
bootstrap();
