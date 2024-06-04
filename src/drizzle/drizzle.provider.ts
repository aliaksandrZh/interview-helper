import { drizzle } from 'drizzle-orm/mysql2';
import * as mysql from 'mysql2/promise';
import { catchError, firstValueFrom, from, map, retry } from 'rxjs';
import { dbCredentials } from '../../drizzle.config';
import * as schema from './schemas';

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
      map((connection) =>
        drizzle(connection, { schema: { ...schema }, mode: 'default' }),
      ),
    ),
  );
  return db;
};

export const DBToken = 'DB_TOKEN_DRIZZLE';

export const DrizzleProvider = {
  provide: DBToken,
  useFactory: async () => await initializeDB(),
};
