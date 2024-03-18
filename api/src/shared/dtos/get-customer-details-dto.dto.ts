import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetCustomerDetailsQueryDto {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
  })
  @IsUUID()
  id: string;
}
