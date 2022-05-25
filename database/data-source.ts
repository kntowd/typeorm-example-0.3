import { DataSource } from 'typeorm';
import { Photo } from './entity/Photo';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'typeorm3',
  synchronize: false,
  logging: false,
  entities: [Photo],
  migrations: ['database/migration/*.ts'],
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
