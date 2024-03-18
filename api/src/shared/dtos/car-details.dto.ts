import { ApiProperty } from '@nestjs/swagger';
import { CarPositionDto } from 'src/shared/dtos/car-position.dto';
import { CustomerDetailsDto } from 'src/shared/dtos/customer-details.dto';

export class CarDetailsDto {
  @ApiProperty({ type: 'string', format: 'uuid' })
  id: string;

  @ApiProperty()
  manufacturer: string;

  @ApiProperty()
  license: string;

  @ApiProperty()
  vin: string;

  @ApiProperty()
  rented: boolean;

  @ApiProperty()
  customer: CustomerDetailsDto;

  @ApiProperty()
  position: CarPositionDto;
}
