import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DrizzleProvider } from './drizzle/drizzle.provider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DrizzleProvider],
})
export class AppModule {}
