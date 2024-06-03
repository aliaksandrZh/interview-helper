import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfigService } from './drizzle/drizzle.config';
import { DrizzlePlanetScaleModule } from './drizzle/drizzle.module';
import { DrizzleToken } from './drizzle/drizzle.definition';

@Module({
  imports: [
    DrizzlePlanetScaleModule.registerAsync({
      tag: DrizzleToken,
      useClass: DBConfigService,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
