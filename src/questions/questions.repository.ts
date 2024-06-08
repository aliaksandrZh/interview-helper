import { Inject, Injectable } from '@nestjs/common';
import { eq, like } from 'drizzle-orm';
import { Database } from 'src/drizzle/drizzle.interface';
import { DBToken } from 'src/drizzle/drizzle.provider';
import {
  Question,
  QuestionCandidateWithTags,
  QuestionTagMapCandidate,
  Tag,
  questionTagMaps,
  questions,
} from 'src/drizzle/schemas';
import { QuestionValidationContextKeys } from './questions.type';

@Injectable()
export class QuestionRepositoryService {
  constructor(@Inject(DBToken) private db: Database) {}

  async create(question: QuestionCandidateWithTags) {
    await this.db.transaction(async (tx) => {
      const [{ insertId }] = await tx.insert(questions).values(question);

      if (question.tags) {
        const tags = this.mapQuestionWithTag(insertId, question.tags);
        await tx.insert(questionTagMaps).values(tags);
      }
    });
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

  async findFirstByText(text: string): Promise<Question> {
    return await this.db.query.questions.findFirst({
      where: like(questions.text, text),
    });
  }

  private mapQuestionWithTag(
    questionId: Question['id'],
    tags: Tag['id'][],
  ): QuestionTagMapCandidate[] {
    return tags.map((tagId) => ({
      questionId,
      tagId,
    }));
  }

  async isQuestionExist(
    question: Question['id'] | Question['text'],
    options: {
      field: QuestionValidationContextKeys;
    },
  ) {
    return !!(await this.db.query.questions.findFirst({
      where: (questions, { eq }) => eq(questions[options.field], question),
    }));
  }
}
