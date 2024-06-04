import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { QuestionRepository } from './questions.repository';

@Module({
  controllers: [QuestionsController],
  // TODO: Rename QuestionRepository -> QuestionRepositoryService same for other repositories
  providers: [QuestionsService, QuestionRepository],
})
export class QuestionsModule {}
