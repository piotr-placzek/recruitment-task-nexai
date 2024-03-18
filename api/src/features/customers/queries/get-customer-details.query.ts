import { IQuery } from '@nestjs/cqrs';

export class GetCustomerDetailsQuery implements IQuery {
  constructor(public readonly customerId: string) {}
}
