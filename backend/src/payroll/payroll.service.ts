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
      let OneMonthPayroll_A = await this.knex.raw(`
        select concat(employee.last_name, ' ', employee.first_name,', ',employee.alias) as name,
        employee.id,
        employee.employeeid,
        employee.basic_salary,
        payroll_edit_history.ot_pay,
        payroll_edit_history.bonus,
        payroll_edit_history.nopay_leave,
        payroll_edit_history.mpf_employee,
        payroll_edit_history.total
        from employee
        left join payroll_edit_history on employee.id = payroll_edit_history.employeeid
        where payroll_edit_history.year = ${year} and payroll_edit_history.month = ${month}
        ORDER BY employee.id
        `);

      let OneMonthPayroll_A_id_list_DB = await this.knex.raw(`
        select employee.id
        from employee
        left join payroll_edit_history on employee.id = payroll_edit_history.employeeid
        where payroll_edit_history.year = ${year} and payroll_edit_history.month = ${month}
        ORDER BY employee.id
        `);

      console.log(OneMonthPayroll_A_id_list_DB.rows);

      let OneMonthPayroll_A_id_list = [];
      OneMonthPayroll_A_id_list_DB.rows.forEach((item) => {
        OneMonthPayroll_A_id_list.push(item.id);
      });

      let OneMonthPayroll_B = await this.knex
        .select(
          this.knex.raw(
            `concat(employee.last_name, ' ', employee.first_name,', ',employee.alias) as name`,
          ),
          'employee.id',
          'employee.employeeid',
          'employee.basic_salary',
        )
        .where((builder) => builder.whereNotIn('id', OneMonthPayroll_A_id_list))
        .from('employee')
        .orderBy('employee.id');

      // console.log(OneMonthPayroll_B);

      OneMonthPayroll_B.forEach((item) => {
        item.ot_pay = null;
        item.bonus = null;
        item.nopay_leave = null;
        item.mpf_employee = null;
        item.total = null;
      });

      let OneMonthPayroll = [...OneMonthPayroll_A.rows, ...OneMonthPayroll_B];

      OneMonthPayroll.sort(function (a, b) {
        let keyA = a.id;
        let keyB = b.id;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      // let OneMonthPayroll = await this.knex
      //   .select(
      //     this.knex.raw(
      //       `concat(employee.last_name, ' ', employee.first_name,', ',employee.alias) as name`,
      //     ),
      //     'employee.id',
      //     'employee.employeeid',
      //     'employee.basic_salary',
      //     'payroll_edit_history.ot_pay',
      //     'payroll_edit_history.bonus',
      //     'payroll_edit_history.nopay_leave',
      //     'payroll_edit_history.mpf_employee',
      //     'payroll_edit_history.total',
      //   )
      //   .where({
      //     year: year,
      //     month: month,
      //   })
      //   .from('employee')
      //   .leftJoin(
      //     'payroll_edit_history',
      //     'employee.id',
      //     '=',
      //     'payroll_edit_history.employeeid',
      //   )
      //   .orderBy('employee.id');

      OneMonthPayroll.forEach((item) => {
        let ot_pay_calulate = 0;
        let bonus_calulate = 0;
        let nopay_leave_calulate = 0;
        if (item.ot_pay != null) ot_pay_calulate = item.ot_pay;
        if (item.bonus != null) bonus_calulate = item.bonus;
        if (item.nopay_leave != null) nopay_leave_calulate = item.nopay_leave;

        // check if MPF is amended
        if (item.mpf_employee != null) {
          item.mpf_employee_isAmended = true;
        } else {
          item.mpf_employee_isAmended = false;
        }

        // calulation of MPF

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
          item.mpf_employee = calculateMpf(
            item.basic_salary +
              ot_pay_calulate +
              bonus_calulate -
              nopay_leave_calulate,
          );
        }

        // check if total is amended
        if (item.total != null) {
          item.total_isAmended = true;
        } else {
          item.total_isAmended = false;
        }

        // calculate total if it is not amended
        if (item.total == null) {
          item.total =
            item.basic_salary +
            ot_pay_calulate +
            bonus_calulate -
            nopay_leave_calulate -
            item.mpf_employee;
        }
      });

      return OneMonthPayroll;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async writeOneMonth(year: number, month: number) {
    try {
      let OneMonthPayroll_A = await this.knex.raw(`
        select concat(employee.last_name, ' ', employee.first_name,', ',employee.alias) as name,
        employee.id,
        employee.employeeid,
        employee.basic_salary,
        payroll_edit_history.ot_pay,
        payroll_edit_history.bonus,
        payroll_edit_history.nopay_leave,
        payroll_edit_history.mpf_employee,
        payroll_edit_history.total
        from employee
        left join payroll_edit_history on employee.id = payroll_edit_history.employeeid
        where payroll_edit_history.year = ${year} and payroll_edit_history.month = ${month}
        ORDER BY employee.id
        `);

      let OneMonthPayroll_A_id_list_DB = await this.knex.raw(`
        select employee.id
        from employee
        left join payroll_edit_history on employee.id = payroll_edit_history.employeeid
        where payroll_edit_history.year = ${year} and payroll_edit_history.month = ${month}
        ORDER BY employee.id
        `);

      console.log(OneMonthPayroll_A_id_list_DB.rows);

      let OneMonthPayroll_A_id_list = [];
      OneMonthPayroll_A_id_list_DB.rows.forEach((item) => {
        OneMonthPayroll_A_id_list.push(item.id);
      });

      let OneMonthPayroll_B = await this.knex
        .select(
          this.knex.raw(
            `concat(employee.last_name, ' ', employee.first_name,', ',employee.alias) as name`,
          ),
          'employee.id',
          'employee.employeeid',
          'employee.basic_salary',
        )
        .where((builder) => builder.whereNotIn('id', OneMonthPayroll_A_id_list))
        .from('employee')
        .orderBy('employee.id');

      // console.log(OneMonthPayroll_B);

      OneMonthPayroll_B.forEach((item) => {
        item.ot_pay = null;
        item.bonus = null;
        item.nopay_leave = null;
        item.mpf_employee = null;
        item.total = null;
      });

      let OneMonthPayroll = [...OneMonthPayroll_A.rows, ...OneMonthPayroll_B];

      OneMonthPayroll.sort(function (a, b) {
        let keyA = a.id;
        let keyB = b.id;
        // Compare the 2 dates
        if (keyA < keyB) return -1;
        if (keyA > keyB) return 1;
        return 0;
      });

      OneMonthPayroll.forEach((item) => {
        let ot_pay_calulate = 0;
        let bonus_calulate = 0;
        let nopay_leave_calulate = 0;
        if (item.ot_pay != null) ot_pay_calulate = item.ot_pay;
        if (item.bonus != null) bonus_calulate = item.bonus;
        if (item.nopay_leave != null) nopay_leave_calulate = item.nopay_leave;

        // check if MPF is amended
        // if (item.mpf_employee != null) {
        //   item.mpf_employee_isAmended = true;
        // } else {
        //   item.mpf_employee_isAmended = false;
        // }

        // calulation of MPF

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
          item.mpf_employee = calculateMpf(
            item.basic_salary +
              ot_pay_calulate +
              bonus_calulate -
              nopay_leave_calulate,
          );
        }

        // check if total is amended
        // if (item.total != null) {
        //   item.total_isAmended = true;
        // } else {
        //   item.total_isAmended = false;
        // }

        // calculate total if it is not amended
        if (item.total == null) {
          item.total =
            item.basic_salary +
            ot_pay_calulate +
            bonus_calulate -
            nopay_leave_calulate -
            item.mpf_employee;
        }
      });

      OneMonthPayroll.forEach((item) => {
        if (item.ot_pay == null) item.ot_pay = 0;
        if (item.bonus == null) item.bonus = 0;
        if (item.nopay_leave == null) item.nopay_leave = 0;
        item.year = +year;
        item.month = +month;
        delete item.name;
        item.employeeid = item.id;
        delete item.id;
      });

      let writeMonthPayroll = await this.knex('payroll').insert(
        OneMonthPayroll,
      );

      return writeMonthPayroll;
      // return OneMonthPayroll;
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
