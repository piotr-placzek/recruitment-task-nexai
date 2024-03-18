import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { AddressDto } from './address.dto';

export class CustomerDetailsDto {
  @ApiPropertyOptional()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  address: AddressDto;
}
