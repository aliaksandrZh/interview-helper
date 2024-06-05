import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';
import { Category, categories } from './category.schema';

export const questions = mysqlTable('Questions', {
  id: int('id').primaryKey().autoincrement(),
  text: varchar('text', { length: 500 }).notNull().unique(),
  category: int('category')
    .notNull()
    .references(() => categories.id),
});

export type Question = typeof questions.$inferSelect & {
  category: Category;
};

export type QuestionCandidate = typeof questions.$inferInsert & {
  category: Category;
};
