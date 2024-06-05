import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { eq, like } from 'drizzle-orm';
import { Database } from 'src/drizzle/drizzle.interface';
import { DBToken } from 'src/drizzle/drizzle.provider';
import { Answer, AnswerCandidate, answers } from 'src/drizzle/schemas';

@Injectable()
export class AnswersRepositoryService {
  constructor(@Inject(DBToken) private db: Database) {}

  async create(answer: AnswerCandidate) {
    const existedAnswer = await this.db.query.answers.findFirst({
      where: like(answers.text, answer.text),
    });
    if (existedAnswer) {
      throw new HttpException(
        `The answer ${answer.text} already exists`,
        HttpStatus.CONFLICT,
      );
    }

    await this.db.insert(answers).values(answer);
  }

  async delete(id: Answer['id']) {
    await this.db.delete(answers).where(eq(answers.id, id));
  }

  async update(answer: Answer) {
    await this.db.update(answers).set(answer).where(eq(answers.id, answer.id));
  }
}
