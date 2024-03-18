import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AddressDto } from './address.dto';
import {
  IsAlpha,
  IsEmail,
  IsInstance,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

export class CustomerDetailsDto {
  @ApiPropertyOptional({
    format: 'uuid',
  })
  @IsOptional()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty({
    format: 'email',
  })
  email: string;

  @ApiProperty()
  address: AddressDto;
}
