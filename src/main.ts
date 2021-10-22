import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { ApplicationModule } from './app.module';

const runServer = async () => {
  const app = await NestFactory.create(ApplicationModule, new ExpressAdapter());
  await app.listen(3180, '::');
};

runServer().catch(console.error);
