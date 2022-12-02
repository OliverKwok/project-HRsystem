// import { Injectable } from '@nestjs/common';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import { CreatePayrollDto } from './dto/create-payroll.dto';
import { CreatePayrollEditDto } from './dto/create-payroll-edit.dto';
import { UpdatePayrollDto } from './dto/update-payroll.dto';

@Injectable()
export class PayrollService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  async editHistoryCreate(createPayrollEditDto: CreatePayrollEditDto) {
    // console.log(createPayrollEditDto);
    try {
      const checkid = await this.knex
        .table('payroll_edit_history')
        .select('id', 'ot_pay', 'bonus', 'nopay_leave')
        .where({
          year: createPayrollEditDto.year,
          month: createPayrollEditDto.year,
          employeeid: createPayrollEditDto.employeeid,
        });

      let newPayrollEditRecord = {};

      if (createPayrollEditDto.category == 'ot_pay') {
        newPayrollEditRecord = await this.knex
          .table('payroll_edit_history')
          .insert({
            year: createPayrollEditDto.year,
            month: createPayrollEditDto.month,
            employeeid: createPayrollEditDto.employeeid,
            ot_pay: createPayrollEditDto.updated_value,
          });
      } else if (createPayrollEditDto.category == 'bonus') {
        newPayrollEditRecord = await this.knex
          .table('payroll_edit_history')
          .insert({
            year: createPayrollEditDto.year,
            month: createPayrollEditDto.month,
            employeeid: createPayrollEditDto.employeeid,
            bonus: createPayrollEditDto.updated_value,
          });
      } else if (createPayrollEditDto.category == 'nopay_leave') {
        newPayrollEditRecord = await this.knex
          .table('payroll_edit_history')
          .insert({
            year: createPayrollEditDto.year,
            month: createPayrollEditDto.month,
            employeeid: createPayrollEditDto.employeeid,
            nopay_leave: createPayrollEditDto.updated_value,
          });
      }

      // const newPayrollEditRecord = await this.knex
      //   .raw(`"insert into payroll_edit_history
      // (year, month, employeeid)
      // values (${createPayrollEditDto.year},${createPayrollEditDto.month},
      // ${createPayrollEditDto.employeeid})`);

      return { newPayrollEditRecord };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  // create(createPayrollDto: CreatePayrollDto) {
  //   return { result: 'monthly record added' };
  // }

  async findAll() {
    try {
      const allPayroll = await this.knex
        .select(
          'employee.id',
          'employee.employeeid',
          'employee.basic_salary',
          this.knex.raw(
            "concat(employee.last_name, ' ', employee.last_name,",
            ',employee.alias)',
          ),
          'payroll_edit_history',
        )
        .from('employee')
        .join(
          'payroll_edit_history',
          'employee.id',
          '=',
          'payroll_edit_history.employeeid',
        );
      return allPayroll;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} payroll`;
  }

  update(id: number, updatePayrollDto: UpdatePayrollDto) {
    return `This action updates a #${id} payroll`;
  }

  remove(id: number) {
    return `This action removes a #${id} payroll`;
  }
}
