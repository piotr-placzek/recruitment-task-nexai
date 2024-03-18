import { CustomerEntity } from 'src/database/customer.entity';
import { CustomerDetailsDto } from '../dtos/customer-details.dto';

export function toCustomerDetailsDto(
  entity: CustomerEntity,
): CustomerDetailsDto {
  const { createdAt, updatedAt, ...dto } = entity;
  return dto;
}
