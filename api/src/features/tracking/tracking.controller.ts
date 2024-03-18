import { Controller, Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CarPositionDto } from 'src/shared/dtos/car-position.dto';
import { RequestValidationError } from 'src/shared/dtos/request-validation-error.dto';
import { GetCarPositionQueryDto } from './queries/dtos/get-car-position-query.dto';
import { GetCarPositionQuery } from './queries/get-car-position.query';

@Controller('tracking')
@ApiTags('tracking')
export class TrackingController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Current address, where selected car is',
    type: CarPositionDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
    type: RequestValidationError,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getCarPosition(
    @Query('dto') dto: GetCarPositionQueryDto,
  ): Promise<CarPositionDto> {
    return this.queryBus.execute(new GetCarPositionQuery(dto.id));
  }
}
