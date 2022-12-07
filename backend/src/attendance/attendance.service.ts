import { InjectKnex, Knex } from 'nestjs-knex';
import { Injectable } from '@nestjs/common';
import { CreateAttendanceDto } from './dto/create-attendance.dto';
import { UpdateAttendanceDto } from './dto/update-attendance.dto';

@Injectable()
export class AttendanceService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async getAttendance() {
    try {
      let res = await this.knex
        .select(
          'employee.id',
          'employee.employeeid',
          'employee.first_name',
          'employee.last_name',
          'employee.gender',
          'department.dept_name',
        )
        .from('employee')
        .join('employee_role', 'employee.id', 'employee_role.employeeid')
        .join('department', 'employee_role.department_id', 'department.id')
        // .join('attendance', 'employee.id', 'attendance.employee')
        .orderBy('employee.last_name');

      return { res };
    } catch (err) {
      return err;
    }
  }

  async getAttendanceRecord(employeeId, year, month) {
    try {
      let res = await this.knex
        .select('*')
        .from('attendance')
        .where('employee', employeeId)
        .andWhereRaw(`extract(month from attendance.date)=?`, [month])
        .andWhereRaw(`extract(year from attendance.date)=?`, [year]);

      return { res };
    } catch (err) {
      return err;
    }
  }

  async getLeaveRecord(employeeId, year, month) {
    try {
      let res = await this.knex
        .select('*')
        .from('attendance')
        .where('employee', employeeId)
        .andWhereRaw(`extract(month from attendance.date)=?`, [month])
        .andWhereRaw(`extract(year from attendance.date)=?`, [year]);

      return { res };
    } catch (err) {
      return err;
    }
  }

  async getLeaveType() {
    try {
      let res = await this.knex.select('*').from('leave_type');
      return { res };
    } catch (err) {
      return err;
    }
  }

  async changeAttendanceRecord(data: UpdateAttendanceDto) {
    try {
      console.log(data);

      let res_pre = await this.knex
        .select('*')
        .from('attendance')
        .where('employee', data['employeeId'])
        .where('date', data['attendanceDate']);
      console.log(res_pre);

      if (res_pre.length == 0) {
        let res = await this.knex
          .table('attendance')
          .insert({
            employee: data['employeeId'],
            date: data['attendanceDate'],
            status: data['status'],
          })
          .returning('id');
        return { res };
      } else if (res_pre.length == 1) {
        console.log('this date already has a record , help you revise it');
        let res = await this.knex
          .table('attendance')
          .update({
            employee: data['employeeId'],
            date: data['attendanceDate'],
            status: data['status'],
          })
          .where('employee', data['employeeId'])
          .where('date', data['attendanceDate'])
          .returning('id');
        return { res };
      }
    } catch (err) {
      return err;
    }
  }

  async importAttendanceRecord(data) {
    try {
      let res_pre = await this.knex('attendance')
        .select('*')
        .where('date', data[0]['date']);
      console.log(res_pre);

      if (res_pre.length == 0) {
        let res = await this.knex('attendance').insert(data);
        return { res };
      } else {
        let res_0 = await this.knex('attendance')
          .delete()
          .where('date', data[0]['date'])
          .returning('id');

        let res = await this.knex('attendance').insert(data);
        return { res };
        return { res };
      }

      console.log(data);
    } catch (err) {
      console.log(err);

      return err;
    }
  }
  // let res = await this.knex
  // .select(
  //   'employee.id',
  //   'employee.employeeid',
  //   'employee.first_name',
  //   'employee.last_name',
  //   'employee.gender',
  //   'department.dept_name',
  //   'attendance.date',
  //   'attendance.time_checkedin',
  //   'attendance.time_checkedout',
  //   'attendance.status',
  // )
  // .from('employee')
  // .join('employee_role', 'employee.id', 'employee_role.employeeid')
  // .join('department', 'employee_role.department_id', 'department.id')
  // .join('attendance', 'employee.id', 'attendance.employee')
  // .where('employee.id', 14);

  // create(createAttendanceDto: CreateAttendanceDto) {
  //   return 'This action adds a new attendance';
  // }
  // findAll() {
  //   return `This action returns all attendance`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} attendance`;
  // }
  // update(id: number, updateAttendanceDto: UpdateAttendanceDto) {
  //   return `This action updates a #${id} attendance`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} attendance`;
  // }
}
