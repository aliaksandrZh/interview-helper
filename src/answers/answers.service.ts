import { Injectable } from '@nestjs/common';
import { AnswersRepositoryService } from './answers.repository';
import { Answer, AnswerCandidate } from 'src/drizzle/schemas';

@Injectable()
export class AnswersService {
  constructor(private repo: AnswersRepositoryService) {}

  create(answerCandidate: AnswerCandidate): Promise<void> {
    // TODO: map with question
    return this.repo.create(answerCandidate);
  }

  update(answer: Answer): Promise<void> {
    return this.repo.update(answer);
  }

  delete(id: Answer['id']): Promise<void> {
    return this.repo.delete(id);
  }
}
