import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const tags = mysqlTable('Tags', {
  id: serial('id').primaryKey(),
  text: varchar('text', { length: 500 }).notNull().unique(),
});

export type Tag = typeof tags.$inferSelect;
