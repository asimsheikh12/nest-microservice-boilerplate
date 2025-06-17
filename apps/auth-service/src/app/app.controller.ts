// apps/auth-service/src/app/app.controller.ts
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('auth_message')
  handleAuth(data: any) {
    console.log('Received:', data);
    return { status: 'ok', user: data };
  }
}
