import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { CarEntity } from 'src/database/car.entity';
import { Repository } from 'typeorm';
import { RemoveCarFromFleetCommand } from '../remove-car-from-fleet.command';

@CommandHandler(RemoveCarFromFleetCommand)
export class RemoveCarFromFleetCommandHandler
  implements ICommandHandler<RemoveCarFromFleetCommand>
{
  constructor(
    @InjectRepository(CarEntity)
    private readonly fleetRepository: Repository<CarEntity>,
  ) {}

  async execute(command: RemoveCarFromFleetCommand): Promise<void> {
    this.fleetRepository.delete(command.id);
  }
}
