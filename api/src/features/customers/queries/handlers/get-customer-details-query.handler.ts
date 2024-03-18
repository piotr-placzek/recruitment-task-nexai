import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/database/entities/customer.entity';
import { CustomerDetailsDto } from 'src/shared/dtos/customer-details.dto';
import { Repository } from 'typeorm';
import { GetCustomerDetailsQuery } from '../get-customer-details.query';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';
import { HttpException, HttpStatus } from '@nestjs/common';
import { toCustomerDetailsDto } from 'src/shared/factories/customer-details-dto.factory';

@QueryHandler(GetCustomerDetailsQuery)
export class GetCustomerDetailsQueryHandler
  implements IQueryHandler<GetCustomerDetailsQuery>
{
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async execute(query: GetCustomerDetailsQuery): Promise<CustomerDetailsDto> {
    const customer = await this.customerRepository.findOne({
      where: { id: query.customerId },
    });

    if (!customer) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return toCustomerDetailsDto(customer);
  }
}
