import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { FleetController } from './fleet.controller';

const queryHandlers = [];
const commandHandlers = [];

@Module({
  imports: [CoreModule],
  controllers: [FleetController],
  providers: [...queryHandlers, ...commandHandlers],
})
export class FleetModule {}
