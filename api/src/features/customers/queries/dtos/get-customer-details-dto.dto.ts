import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetCustomerDetailsQueryDto {
  @ApiProperty()
  @IsUUID()
  id: string;
}
