import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarPositionDto } from 'src/shared/dtos/car-position.dto';
import { GetCarPositionQuery } from './queries/get-car-position.query';

@ApiTags('tracking')
@Controller('tracking')
export class TrackingController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':carId')
  @ApiResponse({
    status: 200,
    description: 'Current address, where selected car is',
    type: CarPositionDto,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getCarPosition(@Param('carId') carId: string): Promise<CarPositionDto> {
    return this.queryBus.execute(new GetCarPositionQuery(carId));
  }
}
