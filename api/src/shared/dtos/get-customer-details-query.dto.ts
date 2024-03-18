import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetCustomerDetailsQueryDto {
  @ApiProperty({
    format: 'uuid',
  })
  @IsUUID()
  id: string;
}
