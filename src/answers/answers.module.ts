import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { AnswersRepositoryService } from './answers.repository';

@Module({
  providers: [AnswersService, AnswersRepositoryService],
  controllers: [AnswersController],
})
export class AnswersModule {}
