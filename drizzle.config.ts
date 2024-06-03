import { defineConfig } from 'drizzle-kit';

// export const dbCredentials = {
//   host: 'mysql',
//   user: 'root',
//   password: 'rootpassword',
//   database: 'nestdb',
//   port: 3306,
// };

export const dbCredentials = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: +process.env.DB_PORT,
};

export default defineConfig({
  dialect: 'mysql',
  out: './migrations',
  schema: './src/drizzle/schemas',
  dbCredentials,
});

// MYSQL_ROOT_PASSWORD:;
// MYSQL_DATABASE:;
// MYSQL_USER:;
// MYSQL_PASSWORD: password;
