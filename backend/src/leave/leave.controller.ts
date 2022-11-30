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
import { DeleteLeaveDto } from './dto/delete-leave.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Get('showall')
  showAll() {
    return this.leaveService.showAll();
  }

  @Get('getemployees')
  getemployees() {
    return this.leaveService.getEmployees();
  }

  @Patch('update_al')
  updateAL(@Body() updateLeaveDto: UpdateLeaveDto) {
    console.log(updateLeaveDto);
    return this.leaveService.updateAL(updateLeaveDto);
  }

  @Get('types')
  getTypes() {
    return this.leaveService.getTypes();
  }

  @Post('addnewtype')
  addNewType(@Body() createLeaveDto: CreateLeaveDto) {
    return this.leaveService.addNewType(createLeaveDto);
  }

  @Delete('deletetype/:typeid')
  deleteType(@Param('typeid') typeid: string) {
    return this.leaveService.deleteType(`${typeid}`);
  }

  @Get('pending_application')
  pendingApplication() {
    return this.leaveService.pendingApplication();
  }

  @Get('nonpending_application')
  nonPendingApplication() {
    return this.leaveService.nonPendingApplication();
  }

  @Patch('update_status')
  update_status(@Body() updateStatusDto: UpdateStatusDto) {
    console.log(updateStatusDto);
    return this.leaveService.update_status(updateStatusDto);
  }

  // @Post()
  // create(@Body() createLeaveDto: CreateLeaveDto) {
  //   return this.leaveService.create(createLeaveDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.leaveService.findOne(+id);
  // }
}
