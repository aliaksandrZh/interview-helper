import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const answers = mysqlTable('Answers', {
  id: int('id').primaryKey().autoincrement(),
  text: varchar('text', { length: 500 }).notNull().unique(),
});

export type Answer = typeof answers.$inferSelect;
