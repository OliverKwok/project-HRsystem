import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get('orgchart')
  getOrgChart() {
    return this.departmentService.getOrgChart();
  }

  @Get('findcsuite')
  findCSuite() {
    return this.departmentService.findCSuite();
  }

  @Post('add')
  createDept(@Body() createDepartmentDto: CreateDepartmentDto) {
    console.log('init add dep con');
    console.log(createDepartmentDto);
    return this.departmentService.createDept(createDepartmentDto);
  }

  @Get('all')
  findAll() {
    return this.departmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.departmentService.remove(+id);
  }
}
