import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AppService } from './app.service';
import { RegisterDto, LoginDto } from '@shared/dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() dto: RegisterDto) {
    return this.appService.sendMessage('register', dto);
  }

  @Post('login')
  @UsePipes(new ValidationPipe())
  async login(@Body() dto: LoginDto) {
    return this.appService.sendMessage('login', dto);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  getProfile(@Req() req) {
    return req.user;
  }

  @Get('/health')
  getData() {
    return this.appService.getData();
  }
}
