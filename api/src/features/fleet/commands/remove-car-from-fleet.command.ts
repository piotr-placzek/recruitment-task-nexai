import { ICommand } from '@nestjs/cqrs';

export class RemoveCarFromFleetCommand implements ICommand {
  constructor(public readonly id) {}
}
