import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from 'src/database/car.entity';
import { toCarDetailsDto } from 'src/shared/factories/car-details-dto.factory';
import { Repository } from 'typeorm';
import { CarDetailsDto } from '../../queries/dtos/car-details.dto';
import { PutCarDetailsCommand } from '../put-car-details.command';

@CommandHandler(PutCarDetailsCommand)
export class PutCarDetailsCommandHandler
  implements ICommandHandler<PutCarDetailsCommand>
{
  constructor(
    @InjectRepository(CarEntity)
    private readonly fleetRepository: Repository<CarEntity>,
  ) {}

  async execute(command: PutCarDetailsCommand): Promise<CarDetailsDto> {
    const partialEntity = await this.fleetRepository.create({
      ...command,
    });

    const entity = await this.fleetRepository.save(partialEntity);

    return toCarDetailsDto(entity);
  }
}
