import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbDataSource } from 'src/database/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dbDataSource), CqrsModule],
  exports: [CqrsModule],
})
export class CoreModule {}
