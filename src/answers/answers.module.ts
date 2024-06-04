import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { AnswersRepository } from './answers.repository';

@Module({
  providers: [AnswersService, AnswersRepository],
  controllers: [AnswersController],
})
export class AnswersModule {}
