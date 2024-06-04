import { MySql2Database } from 'drizzle-orm/mysql2';
import * as schema from './schemas';

export type Database = MySql2Database<typeof schema>;
