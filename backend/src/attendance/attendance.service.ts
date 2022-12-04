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
        .join('department', 'employee_role.department_id', 'department.id');

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
    let res = await this.knex.select('*').from('leave_type');
    return { res };
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
