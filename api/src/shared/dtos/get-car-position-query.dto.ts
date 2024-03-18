import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetCarPositionQueryDto {
  @ApiProperty({
    format: 'uuid',
  })
  @IsUUID()
  id: string;
}
