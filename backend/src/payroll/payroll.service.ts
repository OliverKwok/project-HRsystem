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

function calculateMpf(input: number) {
  let output = 0;
  if (input < 7100) {
    return 0;
  } else if (input >= 7100 && input <= 30000) {
    return input * 0.05;
  } else {
    return 1500;
  }
}

@Injectable()
export class PayrollService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  async editHistoryCreate(createPayrollEditDto: CreatePayrollEditDto) {
    // console.log(createPayrollEditDto);
    try {
      const checkid = await this.knex
        .table('payroll_edit_history')
        .select('id')
        .where({
          year: createPayrollEditDto.year,
          month: createPayrollEditDto.month,
          employeeid: createPayrollEditDto.employeeid,
        });

      let newPayrollEditRecord = {};

      if (createPayrollEditDto.category == 'ot_pay') {
        if (checkid.length > 0) {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .update({
              ot_pay: createPayrollEditDto.updated_value,
            })
            .where({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
            });
        } else {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .insert({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
              ot_pay: createPayrollEditDto.updated_value,
            });
        }
      } else if (createPayrollEditDto.category == 'bonus') {
        if (checkid.length > 0) {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .update({
              bonus: createPayrollEditDto.updated_value,
            })
            .where({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
            });
        } else {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .insert({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
              bonus: createPayrollEditDto.updated_value,
            });
        }
      } else if (createPayrollEditDto.category == 'nopay_leave') {
        if (checkid.length > 0) {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .update({
              nopay_leave: createPayrollEditDto.updated_value,
            })
            .where({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
            });
        } else {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .insert({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
              nopay_leave: createPayrollEditDto.updated_value,
            });
        }
      } else if (createPayrollEditDto.category == 'mpf_employee') {
        if (checkid.length > 0) {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .update({
              mpf_employee: createPayrollEditDto.updated_value,
            })
            .where({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
            });
        } else {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .insert({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
              mpf_employee: createPayrollEditDto.updated_value,
            });
        }
      } else if (createPayrollEditDto.category == 'total') {
        if (checkid.length > 0) {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .update({
              total: createPayrollEditDto.updated_value,
            })
            .where({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
            });
        } else {
          newPayrollEditRecord = await this.knex
            .table('payroll_edit_history')
            .insert({
              year: createPayrollEditDto.year,
              month: createPayrollEditDto.month,
              employeeid: createPayrollEditDto.employeeid,
              total: createPayrollEditDto.updated_value,
            });
        }
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

  async findOneMonth(year: number, month: number) {
    try {
      let OneMonthPayroll = await this.knex
        .select(
          this.knex.raw(
            `concat(employee.last_name, ' ', employee.first_name,', ',employee.alias) as name`,
          ),
          'employee.id',
          'employee.employeeid',
          'employee.basic_salary',
          'payroll_edit_history.ot_pay',
          'payroll_edit_history.bonus',
          'payroll_edit_history.nopay_leave',
          'payroll_edit_history.mpf_employee',
          'payroll_edit_history.total',
        )
        .from('employee')
        .leftJoin(
          'payroll_edit_history',
          'employee.id',
          '=',
          'payroll_edit_history.employeeid',
        )
        .orderBy('id');

      OneMonthPayroll.forEach((item) => {
        // complete no amendment
        if (
          item.ot_pay == null &&
          item.bonus == null &&
          item.nopay_leave == null &&
          item.mpf_employee == null
        ) {
          item.mpf_employee = calculateMpf(item.basic_salary);
        }

        // revised ot or bonus or nopay, but no revision to mpf
        if (
          (item.ot_pay != 0 || item.bonus != 0 || item.nopay_leave != 0) &&
          item.mpf_employee == null
        ) {
          let ot_pay_calulate = 0;
          let bonus_calulate = 0;
          let nopay_leave_calulate = 0;
          if (item.ot_pay != null) ot_pay_calulate = item.ot_pay;
          if (item.bonus != null) bonus_calulate = item.bonus;
          if (item.nopay_leave != null) nopay_leave_calulate = item.nopay_leave;
          item.mpf_employee = calculateMpf(
            item.basic_salary +
              ot_pay_calulate +
              bonus_calulate -
              nopay_leave_calulate,
          );
        }
      });

      return OneMonthPayroll;
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
