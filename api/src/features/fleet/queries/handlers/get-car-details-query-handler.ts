import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from 'src/database/entities/car.entity';
import { CarDetailsDto } from 'src/shared/dtos/car-details.dto';
import { toCarDetailsDto } from 'src/shared/factories/car-details-dto.factory';
import { Repository } from 'typeorm';
import { GetCarDetailsQuery } from '../get-car-details.query';

@QueryHandler(GetCarDetailsQuery)
export class GetCarDetailsQueryHandler
  implements IQueryHandler<GetCarDetailsQuery>
{
  constructor(
    @InjectRepository(CarEntity)
    private readonly fleetRepository: Repository<CarEntity>,
  ) {}

  async execute(query: GetCarDetailsQuery): Promise<CarDetailsDto> {
    const carDetails = await this.fleetRepository.findOne({
      where: {
        id: query.id,
      },
      relations: {
        rentedBy: true,
        position: true,
      },
    });
    return toCarDetailsDto(carDetails);
  }
}
