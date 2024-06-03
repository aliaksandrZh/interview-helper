import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'mysql',
  out: './migrations',
  schema: './src/drizzle/schemas',
  dbCredentials: {
    host: 'mysql',
    user: 'root',
    password: 'rootpassword',
    database: 'nestdb',
    port: 3306,
  },
});

// MYSQL_ROOT_PASSWORD:;
// MYSQL_DATABASE:;
// MYSQL_USER:;
// MYSQL_PASSWORD: password;
