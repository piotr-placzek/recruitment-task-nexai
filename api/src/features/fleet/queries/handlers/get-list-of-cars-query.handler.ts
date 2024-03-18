import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from 'src/database/car.entity';
import { toCarDetailsDto } from 'src/shared/factories/car-details-dto.factory';
import { Repository } from 'typeorm';
import { CarDetailsDto } from '../dtos/car-details.dto';
import { GetListOfCarsQuery } from '../get-list-of-cars.query';

@QueryHandler(GetListOfCarsQuery)
export class GetListOfCarsQueryHandler
  implements IQueryHandler<GetListOfCarsQuery>
{
  constructor(
    @InjectRepository(CarEntity)
    private readonly fleetRepository: Repository<CarEntity>,
  ) {}

  async execute(): Promise<CarDetailsDto[]> {
    const fleet = await this.fleetRepository.find();
    return fleet.map(toCarDetailsDto);
  }
}
