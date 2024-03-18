import { IQuery } from '@nestjs/cqrs';

export class GetCarPositionQuery implements IQuery {
  constructor(public readonly carId: string) {}
}
