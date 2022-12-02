import {
  Body,
  Controller,
  Post,
  Get,
  Request,
  Param,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/user.dto';
import { CheckEIDDto } from './dto/checkEID.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    // console.log(Body());
    return this.userService.createUser(createUserDto);
  }

  @Patch('update')
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    console.log(Body());
    return this.userService.updateUser(updateUserDto);
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

  @Get('getUpdateStatus')
  async getUpdateStatus(){
    return this.userService.getUpdateStatus();
  }

  @Get('checkEID/:eid')
 checkEID(@Param('eid') eid:string){
    return this.userService.checkEID(eid);
  }
}
