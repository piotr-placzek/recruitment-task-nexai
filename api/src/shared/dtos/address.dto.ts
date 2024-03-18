import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPostalCode, IsString, Min } from 'class-validator';

export class AddressDto {
  @ApiProperty()
  @IsString()
  streetName: string;

  @ApiProperty()
  @IsNumber()
  @Min(1)
  streetNumber: number;

  @ApiProperty()
  @IsPostalCode()
  zipCode: string;
}
