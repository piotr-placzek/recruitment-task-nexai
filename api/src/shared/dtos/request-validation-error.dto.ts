import { ApiProperty } from '@nestjs/swagger';

export class RequestValidationError {
  @ApiProperty({ type: [String] })
  message: string[];

  @ApiProperty()
  error: string;

  @ApiProperty()
  statusCode: number;
}
