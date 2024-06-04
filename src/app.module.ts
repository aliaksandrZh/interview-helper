import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagsModule } from './tags/tags.module';
import { DrizzleModule } from './drizzle/drizzle.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [DrizzleModule, TagsModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
