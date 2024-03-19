import { ICommand } from '@nestjs/cqrs';

export class PutCarDetailsCommand implements ICommand {
  constructor(
    public readonly manufacturer: string,
    public readonly license: string,
    public readonly vin: string,
    public readonly id?: string,
  ) {}
}
