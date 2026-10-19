import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module.js';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module.js';

@Module({
  imports: [UserModule, ConfigModule.forRoot(), DatabaseModule],
})
export class AppModule {}
