import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { eq, like } from 'drizzle-orm';
import { Database } from 'src/drizzle/drizzle.interface';
import { DBToken } from 'src/drizzle/drizzle.provider';
import { Question, QuestionCandidate, questions } from 'src/drizzle/schemas';

@Injectable()
export class QuestionRepository {
  constructor(@Inject(DBToken) private db: Database) {}

  async create(question: QuestionCandidate) {
    const existedAnswer = await this.db.query.answers.findFirst({
      where: like(questions.text, question.text),
    });
    if (existedAnswer) {
      throw new HttpException(
        `The Question ${question.text} already exists`,
        HttpStatus.CONFLICT,
      );
    }

    await this.db.insert(questions).values(question);
  }

  async delete(id: Question['id']) {
    await this.db.delete(questions).where(eq(questions.id, id));
  }

  async update(question: Question) {
    await this.db
      .update(questions)
      .set(question)
      .where(eq(questions.id, question.id));
  }
}
