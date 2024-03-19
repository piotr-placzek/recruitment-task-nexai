import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { CarEntity } from 'src/database/entities/car.entity';
import { TrackingPositionEntity } from 'src/database/entities/tracking-position.entity';
import { toCarDetailsDto } from 'src/shared/factories/car-details-dto.factory';
import { Repository } from 'typeorm';
import { CarDetailsDto } from '../../../../shared/dtos/car-details.dto';
import { PutCarDetailsCommand } from '../put-car-details.command';

@CommandHandler(PutCarDetailsCommand)
export class PutCarDetailsCommandHandler
  implements ICommandHandler<PutCarDetailsCommand>
{
  constructor(
    @InjectRepository(TrackingPositionEntity)
    private readonly trackingRepository: Repository<TrackingPositionEntity>,
    @InjectRepository(CarEntity)
    private readonly fleetRepository: Repository<CarEntity>,
  ) {}

  async execute(command: PutCarDetailsCommand): Promise<CarDetailsDto> {
    const id = command.id ? command.id : randomUUID();

    let trackingEntity = await this.trackingRepository.findOne({
      where: { id },
    });

    if (!trackingEntity) {
      trackingEntity = await this.trackingRepository.create({
        id: id,
        position: {
          streetName: '',
          buildingNumber: '',
          zipCode: '',
        },
      });
      await this.trackingRepository.save(trackingEntity);
    }

    const partialCarEntity = await this.fleetRepository.create({
      ...command,
      id: id,
      position: trackingEntity,
    });

    const carEntity = await this.fleetRepository.save(partialCarEntity);
    return toCarDetailsDto(carEntity);
  }
}
