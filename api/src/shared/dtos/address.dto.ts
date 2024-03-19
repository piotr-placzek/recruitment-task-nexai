import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPostalCode, IsString, Min } from 'class-validator';

export class AddressDto {
  @ApiProperty()
  streetName: string;

  @ApiProperty()
  buildingNumber: string;

  @ApiProperty()
  zipCode: string;
}
