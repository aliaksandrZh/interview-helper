import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';
import { dbCredentials } from '../../drizzle.config';

export type DatabaseType = MySql2Database<Record<string, never>>;
const initializeDB = async () => {
  const connection = await mysql.createConnection({
    ...dbCredentials,
  });

  const db = drizzle(connection);

  return db;
};
export type Database = MySql2Database<Record<string, never>>;

export const DrizzleProvider = {
  provide: 'DB',
  useFactory: async () => await initializeDB(),
};
