import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor() {}

  @Get('health')
  @ApiResponse({ status: 200, description: "Always returns 'OK' status" })
  health(): { status: 'OK' } {
    return { status: 'OK' };
  }
}
