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
    type: 'string',
    format: 'uuid',
  })
  @IsOptional()
  @IsUUID()
  id: string;

  @ApiProperty()
  @IsAlpha()
  firstName: string;

  @ApiProperty()
  @IsAlpha()
  lastName: string;

  @ApiProperty()
  @IsString()
  companyName: string;

  @ApiProperty({
    type: 'string',
    format: 'email',
  })
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsInstance(AddressDto)
  address: AddressDto;
}
