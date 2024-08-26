import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { envs } from '../envs';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: envs.mongo_db_url,
      database: envs.mongo_db,
      ssl: false,

      autoLoadEntities: true,

      // Only enable this option if your application is in development,
      // otherwise use TypeORM migrations to sync entity schemas:
      // https://typeorm.io/#/migrations
      synchronize: true,
    }),
    ,
  ],
})
export class DataBaseModule {}