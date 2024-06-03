import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const tags = mysqlTable('Tags', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 5000 }),
});

export type Question = typeof tags.$inferSelect;
