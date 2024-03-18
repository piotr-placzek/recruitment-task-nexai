import { HttpException, HttpStatus } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { TrackingPositionEntity } from 'src/database/tracking-position.entity';
import { CarPositionDto } from 'src/shared/dtos/car-position.dto';
import { toCarPositionDto } from 'src/shared/factories/car-position-dto.factory';
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
    const entity = await this.trackingPositionRepository.findOne({
      where: { id: query.carId },
    });

    if (!entity) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return toCarPositionDto(entity);
  }
}
