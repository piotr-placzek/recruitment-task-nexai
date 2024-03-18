import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsOptional, IsString, IsUUID } from 'class-validator';

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
  @ApiProperty({ format: 'uuid' })
  id: string;

  @ApiProperty({ type: 'uuid' })
  rentedBy: string;
}
