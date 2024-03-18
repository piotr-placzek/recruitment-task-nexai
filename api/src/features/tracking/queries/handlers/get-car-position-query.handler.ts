import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackingPositionEntity } from 'src/database/tracking-position.entity';
import { CarPositionDto } from 'src/shared/dtos/car-position.dto';
import { Repository } from 'typeorm';
import { GetCarPositionQuery } from '../get-car-position.query';

@QueryHandler(GetCarPositionQuery)
export class GetCarPositionQueryHandler
  implements IQueryHandler<GetCarPositionQuery>
{
  constructor(
    @InjectRepository(TrackingPositionEntity)
    private readonly trackingPositionRepository: Repository<TrackingPositionEntity>,
  ) {}

  async execute(query: GetCarPositionQuery): Promise<CarPositionDto> {
    const entity = await this.trackingPositionRepository.findOneOrFail({
      where: { id: query.carId },
    });

    return {
      carId: query.carId,
      address: entity.position,
      lastUpdate: entity.updatedAt,
    };
  }
}
