import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from 'src/database/entities/car.entity';
import { Repository } from 'typeorm';
import { GetListOfCarsManufacturersQuery } from '../get-list-of-cars-manufacturers.query';

@QueryHandler(GetListOfCarsManufacturersQuery)
export class GetListOfCarsManufacturersQueryHandler
  implements IQueryHandler<GetListOfCarsManufacturersQuery>
{
  constructor(
    @InjectRepository(CarEntity)
    private readonly fleetRepository: Repository<CarEntity>,
  ) {}
  async execute(): Promise<string[]> {
    return this.fleetRepository
      .createQueryBuilder('entity')
      .select('manufacturer')
      .distinct(true)
      .getRawMany();
  }
}
