import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoClient, Db } from 'mongodb';

@Module({
  imports: [ConfigModule],
  controllers: [],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      useFactory: async (configService: ConfigService): Promise<Db> => {
        try {
          const client = await MongoClient.connect(configService.get('MONGO_URI'), {
            useUnifiedTopology: true
          });

          return client.db(configService.get('MONGO_DB_NAME'));
        } catch (e) {
          throw e;
        }
      },
      inject: [ConfigService]
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}