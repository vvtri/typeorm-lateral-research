import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

let config: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: ['**/*.entity.js'],
  synchronize: false,
  migrationsRun: false,
  migrations: ['dist/src/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
  logging: true,
};

export default config;
