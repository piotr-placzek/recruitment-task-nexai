import { ApiProperty } from '@nestjs/swagger';
import { AddressDto } from './address.dto';

export class CarPositionDto {
  @ApiProperty({
    type: 'string',
    format: 'uuid'
  })
  carId: string;

  @ApiProperty()
  address: AddressDto;

  @ApiProperty()
  lastUpdate: Date;
}
