import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const questions = mysqlTable('Questions', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 500 }).notNull().unique(),
});

export type Question = typeof questions.$inferSelect;
