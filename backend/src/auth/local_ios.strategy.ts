import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy_ios extends PassportStrategy(Strategy, 'local_ios') {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateIOSUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
