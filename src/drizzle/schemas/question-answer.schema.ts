import { int, mysqlTable } from 'drizzle-orm/mysql-core';
import { answers } from './answer.schema';
import { questions } from './question.schema';

export const questionAnswerMaps = mysqlTable('QuestionAnswerMaps', {
  id: int('id').primaryKey().autoincrement(),
  answerId: int('answer_id')
    .notNull()
    .references(() => answers.id),
  questionId: int('question_id')
    .notNull()
    .references(() => questions.id),
});

export type QuestionAnswerMap = typeof questionAnswerMaps.$inferSelect;
