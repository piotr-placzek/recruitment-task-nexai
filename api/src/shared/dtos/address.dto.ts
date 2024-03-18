import { ApiProperty } from '@nestjs/swagger';

export class AddressDto {
  @ApiProperty()
  streetName: string;
  @ApiProperty()
  streetNumber: number;
  @ApiProperty()
  zipCode: string;
}
