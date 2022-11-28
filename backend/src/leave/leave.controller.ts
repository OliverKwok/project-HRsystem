import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LeaveService } from './leave.service';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';

@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Get('showall')
  showAll() {
    return this.leaveService.showAll();
  }

  // @Post()
  // create(@Body() createLeaveDto: CreateLeaveDto) {
  //   return this.leaveService.create(createLeaveDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.leaveService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLeaveDto: UpdateLeaveDto) {
  //   return this.leaveService.update(+id, updateLeaveDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.leaveService.remove(+id);
  // }
}
