import { Module } from '@nestjs/common';
import { QuestionsController } from './questions.controller';
import { QuestionsService } from './questions.service';
import { QuestionRepositoryService } from './questions.repository';
import { IsQuestionExistConstraint } from './questions.validation';

@Module({
  controllers: [QuestionsController],
  providers: [
    QuestionsService,
    QuestionRepositoryService,
    IsQuestionExistConstraint,
  ],
})
export class QuestionsModule {}
