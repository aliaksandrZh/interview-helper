import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const questions = mysqlTable('Questions', {
  id: int('id').primaryKey().autoincrement(),
  text: varchar('text', { length: 500 }).notNull().unique(),
});

export type Question = typeof questions.$inferSelect;
export type QuestionCandidate = Omit<Question, 'id'>;
