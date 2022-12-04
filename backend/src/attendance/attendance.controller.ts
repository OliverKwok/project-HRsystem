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
