import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IosAppService } from './ios_app.service';
import { CreateIosAppDto } from './dto/create-ios_app.dto';
import { UpdateIosAppDto } from './dto/update-ios_app.dto';

interface leaveApplicationFormType {
  employeeID: string;
  leaveType: number;
  startDate: string;
  startDateDuration: string;
  endDate: string;
  endDateDuration: string;
  workingDays: number;
}

@Controller('ios-app')
export class IosAppController {
  constructor(private readonly iosAppService: IosAppService) {}

  @Get('leaveRecord/:userId')
  async showAll(@Param('userId') userId: string) {
    // console.log(userId);

    // console.log(this.iosAppService.leaveRecord(+userId));

    return await this.iosAppService.leaveRecord(+userId);
  }

  @Get('leaveType')
  async getLeaveType() {
    return await this.iosAppService.leaveType();
  }

  @Post('leaveApplication')
  async createLeaveApplication(@Body() data: leaveApplicationFormType) {
    // console.log(data);

    return await this.iosAppService.createLeaveApplication(data);
  }

  @Patch('cancelLeave')
  async cancelLeaveApplication(@Body() updateIosAppDto: UpdateIosAppDto) {
    return await this.iosAppService.cancelLeave(updateIosAppDto);
  }

  @Get('getEvent')
  async getEvent() {
    return await this.iosAppService.getEvent();
  }

  @Get('getAttendance/:userId')
  async getAttendance(@Param('userId') userId: string) {
    return await this.iosAppService.getAttendance(+userId);
  }

  @Get('getPHolidays/')
  async getPHolidays() {
    return await this.iosAppService.getPHolidays();
  }

  @Get('getHolidaysName/')
  async getHolidaysName() {
    return await this.iosAppService.getHolidaysName();
  }

  @Get('getNotification/')
  async getNotifications() {
    return await this.iosAppService.getNotifications();
  }

  // @Post()
  // create(@Body() createIosAppDto: CreateIosAppDto) {
  //   return this.iosAppService.create(createIosAppDto);
  // }

  // @Get()
  // findAll() {
  //   return this.iosAppService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.iosAppService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateIosAppDto: UpdateIosAppDto) {
  //   return this.iosAppService.update(+id, updateIosAppDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.iosAppService.remove(+id);
  // }
}
