import { Body, Controller, Post, Get, Request } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    console.log(Body());
    return this.userService.createUser(createUserDto);
  }

  @Get('count')
  async userCount() {
    return this.userService.userCount();
  }

  @Get('dayShowCalendar')
  async dayShowCalendar() {
    return this.userService.dayShowCalendar();
  }
}
