import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from 'src/core/core.module';
import { CarEntity } from 'src/database/entities/car.entity';
import { PutCarDetailsCommandHandler } from './commands/handlers/put-car-details-command.handler';
import { RemoveCarFromFleetCommandHandler } from './commands/handlers/remove-car-from-fleet-command.handler';
import { FleetController } from './fleet.controller';
import { GetListOfCarsManufacturersQueryHandler } from './queries/handlers/get-list-of-cars-manufacturers-query.handler';
import { GetListOfCarsQueryHandler } from './queries/handlers/get-list-of-cars-query.handler';
import { TrackingPositionEntity } from 'src/database/entities/tracking-position.entity';

const queryHandlers = [
  GetListOfCarsQueryHandler,
  GetListOfCarsManufacturersQueryHandler,
];
const commandHandlers = [
  PutCarDetailsCommandHandler,
  RemoveCarFromFleetCommandHandler,
];

@Module({
  imports: [CoreModule, TypeOrmModule.forFeature([CarEntity, TrackingPositionEntity])],
  controllers: [FleetController],
  providers: [...queryHandlers, ...commandHandlers],
})
export class FleetModule {}
