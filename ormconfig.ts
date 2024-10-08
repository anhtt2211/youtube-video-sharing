import { DataSource } from 'typeorm';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'postgres',
  database: process.env.DB_DATABASE || 'mydb',
  entities: [__dirname + '/src/**/entities/*.entity.{js,ts}'],
  migrations: ['src/infrastructure/persistence/migrations/*.{js,ts}'],
  migrationsTableName: 'migrations',
  ssl:
    process.env.NODE_ENV === 'development'
      ? false
      : {
          rejectUnauthorized: false,
        },
  logging: true,
});
