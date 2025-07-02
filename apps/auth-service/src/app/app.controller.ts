import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto, LoginDto } from '@shared/dto';
import { AuthService } from './app.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
