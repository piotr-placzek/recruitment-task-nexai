import { ApiProperty } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsBooleanString,
  IsInstance,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { CarPositionDto } from 'src/shared/dtos/car-position.dto';
import { CustomerDetailsDto } from 'src/shared/dtos/customer-details.dto';

export class PutCarDetailsDto {
  @ApiProperty({ format: 'uuid', required: false })
  @IsOptional()
  @IsUUID()
  id?: string;

  @ApiProperty()
  @IsString()
  manufacturer: string;

  @ApiProperty()
  @IsAlphanumeric()
  license: string;

  @ApiProperty()
  @IsAlphanumeric()
  vin: string;
}

export class CarDetailsDto extends PutCarDetailsDto {
  @ApiProperty()
  rented: boolean;

  @ApiProperty()
  customer: CustomerDetailsDto;

  @ApiProperty()
  position: CarPositionDto;
}
