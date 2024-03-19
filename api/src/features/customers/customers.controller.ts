import { Controller, Get, Param } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CustomerDetailsDto } from 'src/shared/dtos/customer-details.dto';
import { RequestValidationError } from 'src/shared/dtos/request-validation-error.dto';
import { GetCustomerDetailsQuery } from './queries/get-customer-details.query';

@Controller('customers')
@ApiTags('customers')
export class CUstomersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get('details')
  @ApiParam({ name: 'id', type: 'uuid' })
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
    @Param() id: string,
  ): Promise<CustomerDetailsDto> {
    return this.queryBus.execute(new GetCustomerDetailsQuery(id));
  }
}
