import { Controller, Get, Query } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerDetailsDto } from 'src/shared/dtos/customer-details.dto';
import { RequestValidationError } from 'src/shared/dtos/request-validation-error.dto';
import { GetCustomerDetailsQueryDto } from '../../shared/dtos/get-customer-details-dto.dto';
import { GetCustomerDetailsQuery } from './queries/get-customer-details.query';

@Controller('customers')
@ApiTags('customers')
export class CUstomersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('details')
  @ApiResponse({
    status: 200,
    description: 'Details for selected customer',
    type: CustomerDetailsDto,
  })
  @ApiResponse({
    status: 400,
    description: 'Validation error',
    type: RequestValidationError,
  })
  @ApiResponse({
    status: 404,
    description: 'Not found',
    type: String,
  })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  async getCustomerDetailsById(
    @Query() dto: GetCustomerDetailsQueryDto,
  ): Promise<CustomerDetailsDto> {
    return this.queryBus.execute(new GetCustomerDetailsQuery(dto.id));
  }
}
