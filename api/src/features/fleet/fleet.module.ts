import { Module } from '@nestjs/common';
import { CoreModule } from 'src/core/core.module';
import { PutCarDetailsCommandHandler } from './commands/handlers/put-car-details-command.handler';
import { RemoveCarFromFleetCommandHandler } from './commands/handlers/remove-car-from-fleet-command.handler';
import { FleetController } from './fleet.controller';
import { GetListOfCarsManufacturersQueryHandler } from './queries/handlers/get-list-of-cars-manufacturers-query.handler';
import { GetListOfCarsQueryHandler } from './queries/handlers/get-list-of-cars-query.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from 'src/database/entities/car.entity';

const queryHandlers = [
  GetListOfCarsQueryHandler,
  GetListOfCarsManufacturersQueryHandler,
];
const commandHandlers = [
  PutCarDetailsCommandHandler,
  RemoveCarFromFleetCommandHandler,
];

@Module({
  imports: [CoreModule, TypeOrmModule.forFeature([CarEntity])],
  controllers: [FleetController],
  providers: [...queryHandlers, ...commandHandlers],
})
export class FleetModule {}
