import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoreModule } from 'src/core/core.module';
import { CarEntity } from 'src/database/entities/car.entity';
import { TrackingPositionEntity } from 'src/database/entities/tracking-position.entity';
import { PutCarDetailsCommandHandler } from './commands/handlers/put-car-details-command.handler';
import { RemoveCarFromFleetCommandHandler } from './commands/handlers/remove-car-from-fleet-command.handler';
import { FleetController } from './fleet.controller';
import { GetCarDetailsQueryHandler } from './queries/handlers/get-car-details-query-handler';
import { GetListOfCarsManufacturersQueryHandler } from './queries/handlers/get-list-of-cars-manufacturers-query.handler';
import { GetListOfCarsQueryHandler } from './queries/handlers/get-list-of-cars-query.handler';

const queryHandlers = [
  GetListOfCarsQueryHandler,
  GetListOfCarsManufacturersQueryHandler,
  GetCarDetailsQueryHandler,
];
const commandHandlers = [
  PutCarDetailsCommandHandler,
  RemoveCarFromFleetCommandHandler,
];

@Module({
  imports: [
    CoreModule,
    TypeOrmModule.forFeature([CarEntity, TrackingPositionEntity]),
  ],
  controllers: [FleetController],
  providers: [...queryHandlers, ...commandHandlers],
})
export class FleetModule {}
