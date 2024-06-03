import { int, mysqlTable, serial } from 'drizzle-orm/mysql-core';

export const questionTagMaps = mysqlTable('QuestionTagMaps', {
  id: serial('id').primaryKey(),
  questionId: int('question_id'),
  tagId: int('tag_id'),
});

export type QuestionTagMap = typeof questionTagMaps.$inferSelect;
