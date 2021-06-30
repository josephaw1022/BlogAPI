import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  app(): string {
    return 'hello world';
  }
}
