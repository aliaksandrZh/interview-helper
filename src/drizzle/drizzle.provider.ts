import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';

export type DatabaseType = MySql2Database<Record<string, never>>;

const initializeDB = async () => {
  const connection = await mysql.createConnection({
    host: 'mysql',
    user: 'root',
    database: 'nestdb',
    password: 'rootpassword',
    port: 3306,
  });

  const db = drizzle(connection);

  return db;
};
export type Database = MySql2Database<Record<string, never>>;

export const DrizzleProvider = {
  provide: 'DB',
  useFactory: async () => await initializeDB(),
};
