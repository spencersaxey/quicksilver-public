import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async handleLogin(@Body() loginDto: Record<string, any>) {
    return this.authService.login(loginDto.email, loginDto.password);
  }
}
