import { int, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const tags = mysqlTable('Tags', {
  id: int('id').primaryKey().autoincrement(),
  text: varchar('text', { length: 500 }).notNull().unique(),
});

export type Tag = typeof tags.$inferSelect;
export type TagCandidate = Omit<Tag, 'id'>;
