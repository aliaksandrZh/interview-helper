import { int, mysqlEnum, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

export const categoriesEnum = mysqlEnum('category', ['Frontend', 'Backend']);

export const categories = mysqlTable('Categories', {
  id: int('id').primaryKey().autoincrement(),
  text: varchar('text', { length: 15 }).notNull().unique(),
});

export enum Category {
  Frontend = 1,
  Backend,
}
