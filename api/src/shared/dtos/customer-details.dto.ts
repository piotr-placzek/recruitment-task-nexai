import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';
import { AddressDto } from './address.dto';

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

  @ApiProperty({
    format: 'email',
  })
  email: string;

  @ApiProperty()
  address: AddressDto;
}
