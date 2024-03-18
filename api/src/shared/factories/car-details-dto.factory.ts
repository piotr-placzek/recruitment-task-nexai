import { CarEntity } from 'src/database/entities/car.entity';
import { CarDetailsDto } from 'src/shared/dtos/car-details.dto';

export function toCarDetailsDto(entity: CarEntity): CarDetailsDto {
  const { createdAt, updatedAt, ...dto } = entity;
  return dto;
}
