import { config } from 'dotenv';
config();
const port = +process.env.PORT || 3000;
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap () {
  const app = await NestFactory.create( AppModule );
  await app.listen( port );
  console.log( `Aplicação pronta e ouvindo na porta ${port}\n` );
}
bootstrap();
