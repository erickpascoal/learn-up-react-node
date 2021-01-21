
module.exports = {
  host: 'localhost',
  type: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'learnup',
  entities: [
    `src/modules/**/infra/typeorm/models/*{.ts,.js}`,
    // aqui deve virar 'dist' quando for para prod
  ],
  migrations: [
    'src/database/migrations/*{.ts,.js}',
    // aqui deve virar 'dist' quando for para prod
  ],
  cli: {
    migrationsDir: 'src/database/migrations',
    // aqui deve virar 'dist' quando for para prod
  },
  synchronize: false,
};