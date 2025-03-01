import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from 'db-config';
import { V1Module } from './modules/api/v1.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), V1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
