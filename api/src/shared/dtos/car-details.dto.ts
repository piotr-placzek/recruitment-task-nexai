import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsOptional,
  IsString,
  IsUUID,
  Length,
} from 'class-validator';
import { CarPositionDto } from './car-position.dto';
import { CustomerDetailsDto } from './customer-details.dto';

export class PutCarDetailsDto {
  @ApiProperty({ format: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsString()
  license: string;

  @ApiProperty()
  @IsAlphanumeric()
  @Length(17)
  vin: string;
}

export class CarDetailsDto extends PutCarDetailsDto {
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty()
  rentedBy: CustomerDetailsDto;

  @ApiProperty()
  position: CarPositionDto;
}
