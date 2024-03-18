import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetCarPositionQueryDto {
  @ApiProperty()
  // @IsUUID()
  id: string;
}
