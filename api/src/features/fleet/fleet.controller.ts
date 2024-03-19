import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RemoveCarQueryDto } from 'src/shared/dtos/remove-car-query.dto';
import { RequestValidationError } from 'src/shared/dtos/request-validation-error.dto';
import {
  CarDetailsDto,
  PutCarDetailsDto,
} from '../../shared/dtos/car-details.dto';
import { PutCarDetailsCommand } from './commands/put-car-details.command';
import { RemoveCarFromFleetCommand } from './commands/remove-car-from-fleet.command';
import { GetListOfCarsManufacturersQuery } from './queries/get-list-of-cars-manufacturers.query';
import { GetListOfCarsQuery } from './queries/get-list-of-cars.query';
import { GetCarDetailsQuery } from './queries/get-car-details.query';

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
    type: CarDetailsDto,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getListOfCars(): Promise<CarDetailsDto[]> {
    return this.queryBus.execute(new GetListOfCarsQuery());
  }

  @Get('details/:id')
  @ApiParam({ name: 'id', type: 'uuid' })
  @ApiResponse({
    status: 200,
    description: 'Returns car details',
    type: CarDetailsDto,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getCarDetails(@Param('id') id: string): Promise<CarDetailsDto> {
    return this.queryBus.execute(new GetCarDetailsQuery(id));
  }

  @Get('manufacturers')
  @ApiResponse({
    status: 200,
    description: 'Returns list of cars brands',
    type: String,
    isArray: true,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getListOfCarsManufacturers(): Promise<string[]> {
    return this.queryBus.execute(new GetListOfCarsManufacturersQuery());
  }

  @Put()
  @ApiResponse({
    status: 200,
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
    @Body() dto: PutCarDetailsDto,
  ): Promise<CarDetailsDto> {
    return this.commandBus.execute(
      new PutCarDetailsCommand(dto.manufacturer, dto.license, dto.vin, dto.id),
    );
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
  async removeCarFromFleet(@Query() dto: RemoveCarQueryDto): Promise<void> {
    return this.commandBus.execute(new RemoveCarFromFleetCommand(dto.id));
  }
}
