import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const answers = mysqlTable('Answers', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 5000 }),
});

export type Answer = typeof answers.$inferSelect;
