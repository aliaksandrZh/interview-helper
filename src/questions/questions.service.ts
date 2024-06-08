import { Injectable } from '@nestjs/common';
import { Question, QuestionCandidateWithTags } from 'src/drizzle/schemas';
import { QuestionRepositoryService } from './questions.repository';

@Injectable()
export class QuestionsService {
  constructor(private repo: QuestionRepositoryService) {}
  //TODO: Get

  async create(questionCandidate: QuestionCandidateWithTags): Promise<void> {
    return this.repo.create(questionCandidate);
  }

  update(question: Question): Promise<void> {
    return this.repo.update(question);
  }

  delete(id: Question['id']): Promise<void> {
    // TODO: Delete QuestionTagMap!
    // TODO: Delete answer ?
    return this.repo.delete(id);
  }

  isQuestionExist(
    value: Question['id'] | Question['text'],
    options: {
      field: keyof Pick<Question, 'id' | 'text'>;
    },
  ) {
    return this.repo.isQuestionExist(value, options);
  }
}
