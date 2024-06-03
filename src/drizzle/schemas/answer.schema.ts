import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const answers = mysqlTable('Answers', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 500 }).notNull().unique(),
});

export type Answer = typeof answers.$inferSelect;
