import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import CoreModule from './core/core.module';
import { TrackingModule } from './features/tracking/tracking.module';

@Module({
  imports: [CoreModule, TrackingModule],
  controllers: [AppController],
})
export class AppModule {}
