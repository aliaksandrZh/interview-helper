import { int, mysqlTable } from 'drizzle-orm/mysql-core';
import { questions } from './question.schema';
import { tags } from './tag.schema';

export const questionTagMaps = mysqlTable('QuestionTagMaps', {
  id: int('id').primaryKey().autoincrement(),
  questionId: int('question_id')
    .notNull()
    .references(() => questions.id),
  tagId: int('tag_id')
    .notNull()
    .references(() => tags.id),
});

export type QuestionTagMap = typeof questionTagMaps.$inferSelect;
