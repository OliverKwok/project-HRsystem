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
  getTypes(){
    return this.leaveService.getTypes();
  }

  @Post('addnewtype')
  addNewType(@Body() createLeaveDto: CreateLeaveDto){
    return this.leaveService.addNewType(createLeaveDto);
  }

  @Delete('delete')
  deleteType(@Param('id') id: string) {
    return this.leaveService.deleteType(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLeaveDto: UpdateLeaveDto) {
  //   return this.leaveService.update(+id, updateLeaveDto);
  // }

  // @Post()
  // create(@Body() createLeaveDto: CreateLeaveDto) {
  //   return this.leaveService.create(createLeaveDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.leaveService.findOne(+id);
  // }


}
