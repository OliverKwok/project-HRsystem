import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PayrollService } from './payroll.service';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { CreatePayrollEditDto } from './dto/create-payroll-edit.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';

@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Post('editHistoryCreate')
  editHistoryCreate(@Body() createPayrollEditDto: CreatePayrollEditDto) {
    return this.payrollService.editHistoryCreate(createPayrollEditDto);
  }

  // @Post('create')
  // create(@Body() createPayrollDto: CreatePayrollDto) {
  //   return this.payrollService.create(createPayrollDto);
  // }

  // @Get()
  // findAll() {
  //   return this.payrollService.findAll();
  // }

  @Get('/:year/:month')
  findOneMonth(@Param('year') year: number, @Param('month') month: number) {
    return this.payrollService.findOneMonth(year, month);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.payrollService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePayrollDto: UpdatePayrollDto) {
    return this.payrollService.update(+id, updatePayrollDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.payrollService.remove(+id);
  }
}
