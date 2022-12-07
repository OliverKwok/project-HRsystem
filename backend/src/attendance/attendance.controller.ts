import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('getAttendance')
  async getAttendance() {
    return await this.attendanceService.getAttendance();
  }

  @Get('getAttendanceRecord/:id/:year/:month')
  async getAttendanceRecord(
    @Param('id') employeeId: string,
    @Param('year') year: string,
    @Param('month') month: string,
  ) {
    return await this.attendanceService.getAttendanceRecord(
      employeeId,
      year,
      month,
    );
  }

  @Get('getLeaveType')
  async getLeaveType() {
    return await this.attendanceService.getLeaveType();
  }

  @Post('changeAttendanceRecord')
  changeAttendanceRecord(@Body() data: UpdateAttendanceDto) {
    console.log(data);

    return this.attendanceService.changeAttendanceRecord(data);
  }

  @Post('importAttendanceRecord')
  importAttendanceRecord(@Body() data) {
    for (let element of data) {
      if (
        new Date(element['time_checkedin']).getTime() <
        new Date(`${element['date']} 09:00:00`).getTime()
      ) {
        element['status'] = 'punctual';
        delete element['status\r'];
      } else if (element['time_checkedin'] == '') {
        element['status'] = 'absent';
        delete element['status\r'];
      } else {
        element['status'] = 'late';
        delete element['status\r'];
      }
    }

    return this.attendanceService.importAttendanceRecord(data);
  }

  // @Post()
  // create(@Body() createAttendanceDto: CreateAttendanceDto) {
  //   return this.attendanceService.create(createAttendanceDto);
  // }

  // @Get()
  // findAll() {
  //   return this.attendanceService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.attendanceService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateAttendanceDto: UpdateAttendanceDto) {
  //   return this.attendanceService.update(+id, updateAttendanceDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.attendanceService.remove(+id);
  // }
}
