import { CarEntity } from 'src/database/entities/car.entity';
import { CarDetailsDto } from 'src/shared/dtos/car-details.dto';
import { toCarPositionDto } from './car-position-dto.factory';
import { toCustomerDetailsDto } from './customer-details-dto.factory';

export function toCarDetailsDto(entity: CarEntity): CarDetailsDto {
  const { createdAt, updatedAt, ...dto } = entity;
  return {
    ...dto,
    customer: toCustomerDetailsDto(dto.customer),
    position: toCarPositionDto(dto.position),
  };
}
