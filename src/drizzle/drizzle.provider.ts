import { MySql2Database, drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';
import { dbCredentials } from '../../drizzle.config';
import { catchError, firstValueFrom, from, map, retry } from 'rxjs';

export type DatabaseType = MySql2Database<Record<string, never>>;

const initializeDB = async () => {
  const db = await firstValueFrom(
    from(
      mysql.createConnection({
        ...dbCredentials,
      }),
    ).pipe(
      catchError((err) => {
        console.log('Cannot connect to the DB.', err);
        console.log('Next try in 5sec');
        throw err;
      }),
      retry({
        delay: 5000,
      }),
      map((connection) => drizzle(connection)),
    ),
  );
  // const db = drizzle(connection);
  return db;
};

export type Database = MySql2Database<Record<string, never>>;

export const DrizzleProvider = {
  provide: 'DB',
  useFactory: async () => await initializeDB(),
};
