import { Injectable } from '@nestjs/common';
import { RegisterDto, LoginDto } from '@shared/dto';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  async register(dto: RegisterDto) {
    // TODO: Save user to DB
    return { message: 'User registered', user: dto };
  }

  async login(dto: LoginDto) {
    // TODO: Validate user credentials
    const payload = { email: dto.email };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: '1h',
      algorithm: 'HS256',
      issuer: 'auth-service',
      audience: 'api-gateway',
    });
    return { access_token: token };
  }
}
