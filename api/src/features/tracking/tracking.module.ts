import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import CoreModule from 'src/core/core.module';
import { TrackingPositionEntity } from 'src/database/tracking-position.entity';
import { GetCarPositionQueryHandler } from './queries/handlers/get-car-position-query.handler';
import { TrackingController } from './tracking.controller';

const queryHandlers = [GetCarPositionQueryHandler];

@Module({
  imports: [CoreModule, TypeOrmModule.forFeature([TrackingPositionEntity])],
  controllers: [TrackingController],
  providers: [...queryHandlers],
})
export class TrackingModule {}
