import { TrackingPositionEntity } from 'src/database/tracking-position.entity';
import { CarPositionDto } from '../dtos/car-position.dto';

export function toCarPositionDto(
  entity: TrackingPositionEntity,
): CarPositionDto {
  return {
    carId: entity.id,
    lastUpdate: entity.updatedAt,
    address: entity.position,
  };
}
