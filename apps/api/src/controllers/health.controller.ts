import { Controller, Get } from '@nestjs/common';

@Controller('/health')
export class HealthController {
  @Get('')
  healthCheck(): string {
    return 'Only if you guys promise to stay healthy and not roughhouse after you rotate me.';
  }
}
