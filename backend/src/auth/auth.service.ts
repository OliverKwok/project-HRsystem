import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findOne(username);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async validateIOSUser(username: string, pass: string): Promise<any> {
    const user = await this.userService.findIOSUser(username);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = {
      username: user.username,
      userId: user.id,
      status: user.status,
    };
    console.log({ payload });

    // console.log(this.jwtService.sign(payload));
    return {
      id: user.id,
      access_token: this.jwtService.sign(payload),
    };
  }
}
