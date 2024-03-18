import { Body, Controller, Get, Put } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { RequestValidationError } from 'src/shared/dtos/request-validation-error.dto';
import { PutCarDetailsCommand } from './commands/put-car-details.command';
import { GetListOfCarsManufacturersQuery } from './queries/get-list-of-cars-manufacturers.query';
import { GetListOfCarsQuery } from './queries/get-list-of-cars.query';

class CarDetailsDto {}

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
}
