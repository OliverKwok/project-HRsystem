import { Body, Controller, Post, Get, Request, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    // console.log(Body());
    return this.userService.createUser(createUserDto);
  }

  @Post('update')
  updateUser(@Body() createUserDto: CreateUserDto) {
    // console.log(Body());
    return this.userService.updateUser(createUserDto);
  }

  @Get('getAllInfo/:id')
  getAllInfo(@Param('id') id: string) {
    return this.userService.getAllInfo(id);
  }

  @Get('count')
  async userCount() {
    return this.userService.userCount();
  }

  @Get('reportTo')
  async() {
    return this.userService.userReportTo();
  }

  @Get('birthdayShowCalendar')
  async birthdayShowCalendar() {
    return this.userService.birthdayShowCalendar();
  }

  @Get('leaveShowCalendar')
  async leaveShowCalendar() {
    return this.userService.leaveShowCalendar();
  }
}
