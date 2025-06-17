// apps/api-gateway/src/app/app.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class AppService implements OnModuleInit {
  private client: ClientProxy;

  onModuleInit() {
    this.client = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'auth_queue',
        queueOptions: {
          durable: false,
        },
      },
    });
  }

  async sendAuthMessage(data: any) {
    return this.client.send('auth_message', data).toPromise();
  }

  getData() {
    return { message: 'API Gateway is running' };
  }
}
