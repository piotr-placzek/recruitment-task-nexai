import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerEntity } from 'src/database/customer.entity';
import { CustomerDetailsDto } from 'src/shared/dtos/customer-details.dto';
import { Repository } from 'typeorm';
import { GetCustomerDetailsQuery } from '../get-customer-details.query';

@QueryHandler(GetCustomerDetailsQuery)
export class GetCustomerDetailsQueryHandler
  implements IQueryHandler<GetCustomerDetailsQuery>
{
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async execute(query: GetCustomerDetailsQuery): Promise<CustomerDetailsDto> {
    return this.customerRepository.findOneOrFail({
      where: { id: query.customerId },
    });
  }
}
