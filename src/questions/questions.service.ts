import { Injectable } from '@nestjs/common';
import { QuestionRepository } from './questions.repository';
import { Question, QuestionCandidate } from 'src/drizzle/schemas';

@Injectable()
export class QuestionsService {
  constructor(private repo: QuestionRepository) {}
  //TODO: Get

  create(questionCandidate: QuestionCandidate): Promise<void> {
    // TODO: map with tags
    return this.repo.create(questionCandidate);
  }

  update(question: Question): Promise<void> {
    return this.repo.update(question);
  }

  delete(id: Question['id']): Promise<void> {
    // TODO: Delete answer?
    return this.repo.delete(id);
  }
}
