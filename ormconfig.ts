export default {
  type: process.env.DB_TYPE,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER_NAME,
    password: process.env.DB_USER_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [
    'dist/apps/backend/api/src/**/*.entity.js',
  ],
    migrations: [
    'dist/apps/backend/api/src/migrations/*.js',
  ],
    cli: {
    'migrationsDir': 'apps/backend/api/src/migrations',
  },
}
