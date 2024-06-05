import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { QuestionRepositoryService } from './questions.repository';
import { Question, QuestionCandidateWithTags } from 'src/drizzle/schemas';

@Injectable()
export class QuestionsService {
  constructor(private repo: QuestionRepositoryService) {}
  //TODO: Get

  async create(questionCandidate: QuestionCandidateWithTags): Promise<void> {
    const existedAnswer = await this.repo.findFirstByText(
      questionCandidate.text,
    );
    if (existedAnswer) {
      throw new HttpException(
        `The Question ${questionCandidate.text} already exists`,
        HttpStatus.CONFLICT,
      );
    }

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
}
