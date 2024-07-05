import { Module } from '@nestjs/common';
//import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { envs } from '../envs';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: async () => ({
        uri: envs.mongo_db_url,
        dbName: envs.mongo_db,
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}