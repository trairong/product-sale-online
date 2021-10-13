import { TypeOrmModule } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');
console.log('process.env.NODE_ENV====:',process.env.NODE_ENV);
export const SQLconfig: TypeOrmModule = {
  type: dbConfig.type,
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  timezone: 'Asia/Bangkok',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
  extra: {
    charset: 'utf8_general_ci',
  },
};
console.log(SQLconfig);