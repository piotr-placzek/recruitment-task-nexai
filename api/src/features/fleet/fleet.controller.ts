import { Body, Controller, Delete, Get, Put, Query } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestValidationError } from 'src/shared/dtos/request-validation-error.dto';
import { PutCarDetailsCommand } from './commands/put-car-details.command';
import { RemoveCarFromFleetCommand } from './commands/remove-car-from-fleet.command';
import { GetListOfCarsManufacturersQuery } from './queries/get-list-of-cars-manufacturers.query';
import { GetListOfCarsQuery } from './queries/get-list-of-cars.query';

class CarDetailsDto {}
class RemoveCarQueryDto {
  id: string;
}

@Controller('fleet')
@ApiTags('fleet')
export class FleetController {
  constructor(
    private readonly queryBus: QueryBus,
    private readonly commandBus: CommandBus,
  ) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Returns list of cars',
    type: Array<CarDetailsDto>,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getListOfCars(): Promise<unknown> {
    return this.queryBus.execute(new GetListOfCarsQuery());
  }

  @Get('manufacturers')
  @ApiResponse({
    status: 200,
    description: 'Returns list of cars brands',
    // type:
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getListOfCarsManufacturers(): Promise<unknown> {
    return this.queryBus.execute(new GetListOfCarsManufacturersQuery());
  }

  @Put()
  @ApiResponse({
    status: 201,
    description: 'Add or edit car details, returns these details',
    type: CarDetailsDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
    type: RequestValidationError,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async addOrEditCarDetails(
    @Body() dto: CarDetailsDto,
  ): Promise<CarDetailsDto> {
    return this.commandBus.execute(new PutCarDetailsCommand());
  }

  @Delete()
  @ApiResponse({
    status: 200,
    description: 'Remove selected car from fleet',
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
    type: RequestValidationError,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async removeCarFromFleet(
    @Query('dto') dto: RemoveCarQueryDto,
  ): Promise<void> {
    return this.commandBus.execute(new RemoveCarFromFleetCommand(dto.id));
  }
}
