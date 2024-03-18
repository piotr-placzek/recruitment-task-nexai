import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class RemoveCarQueryDto {
  @ApiProperty({
    format: 'uuid',
  })
  @IsUUID()
  id: string;
}
