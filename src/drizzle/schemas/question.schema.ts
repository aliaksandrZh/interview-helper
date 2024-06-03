import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const questions = mysqlTable('Questions', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 5000 }),
});

export type Question = typeof questions.$inferSelect;
