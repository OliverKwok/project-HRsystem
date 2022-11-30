import { InjectKnex, Knex } from 'nestjs-knex';
import {
  HttpException,
  Injectable,
  HttpStatus,
  ConsoleLogger,
  MethodNotAllowedException,
} from '@nestjs/common';
import { CreateLeaveDto } from './dto/create-leave.dto';
import { UpdateLeaveDto } from './dto/update-leave.dto';
import { DeleteLeaveDto } from './dto/delete-leave.dto';
import { UpdateStatusDto } from './dto/update-status.dto';

@Injectable()
export class LeaveService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async showAll() {
    try {
      let res = await this.knex
        .select(
          'id',
          'al_leave_entitled_peryear as entitledAL',
          'al_leave_taken',
          this.knex.raw(
            `concat(UPPER(employee.last_name), ' ', employee.first_name, ', ', employee.alias) as name`,
          ),
        )
        .from('employee');
      return { res };
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async getEmployees() {
    try {
      let res = await this.knex
        .select(
          this.knex.raw(
            `concat(UPPER(employee.last_name), ' ', employee.first_name, ', ', employee.alias) as name`,
          ),
        )
        .from('employee');
      return { res };
    } catch (err) {
      console.log(err);
    }
  }

  async updateAL(updateLeaveDto: UpdateLeaveDto) {
    console.log(updateLeaveDto);
    try {
      const newAL = await this.knex
        .update({
          al_leave_taken: updateLeaveDto.al_leave_taken,
        })
        .table('employee')
        .where({ id: updateLeaveDto.id });
      return newAL;
    } catch (err) {
      console.log(err);
    }
  }

  async getTypes() {
    try {
      let allTypes = await this.knex.select('type', 'id').from('leave_type');
      console.log({ allTypes });
      return allTypes;
    } catch (err) {
      console.log(err);
    }
  }

  async addNewType(createLeaveDto: CreateLeaveDto) {
    try {
      const newtype = await this.knex.table('leave_type').insert({
        type: createLeaveDto.type,
      });
      return { newtype };
    } catch (err) {
      console.log(err);
    }
  }

  async deleteType(typeid: string) {
    try {
      let deletetype = await this.knex
        .table('leave_type')
        .del(['type'])
        .where({ id: typeid });
      return deletetype;
    } catch (err) {
      console.log(err);
    }
  }

  async pendingApplication() {
    try {
      let applications = await this.knex
        .select(
          this.knex.raw(
            `concat(UPPER(employee.last_name), ' ', employee.first_name, ', ', employee.alias) as employee_name`,
          ),
          'employee.id as employee_id',
          'employee.employeeid as employee_work_id',
          'leave_application.created_at',
          'leave_type.type as leavetype',
          'leave_type.id as leavetype_id',
          'leave_application.start_date',
          'leave_application.start_date_period',
          'leave_application.end_date',
          'leave_application.end_date_period',
          'leave_application.number_of_days',
          'leave_application.status',
          'leave_application.id as application_id',
        )
        .from('leave_application')
        .join('employee', 'leave_application.employee_id', '=', 'employee.id')
        .join(
          'leave_type',
          'leave_application.leave_type',
          '=',
          'leave_type.id',
        )
        .where({ 'leave_application.status': 'pending' });
      return applications;
    } catch (err) {
      console.log(err);
    }
  }

  async nonPendingApplication() {
    try {
      let applications = await this.knex
        .select(
          this.knex.raw(
            `concat(UPPER(employee.last_name), ' ', employee.first_name, ', ', employee.alias) as employee_name`,
          ),
          'employee.id as employee_id',
          'employee.employeeid as employee_work_id',
          'leave_application.created_at',
          'leave_type.type as leavetype',
          'leave_type.id as leavetype_id',
          'leave_application.start_date',
          'leave_application.start_date_period',
          'leave_application.end_date',
          'leave_application.end_date_period',
          'leave_application.number_of_days',
          'leave_application.status',
          'leave_application.id as application_id',
        )
        .from('leave_application')
        .join('employee', 'leave_application.employee_id', '=', 'employee.id')
        .join(
          'leave_type',
          'leave_application.leave_type',
          '=',
          'leave_type.id',
        )
        .whereNot({ 'leave_application.status': 'pending' });
      return applications;
    } catch (err) {
      console.log(err);
    }
  }

  async update_status(updateStatusDto: UpdateStatusDto) {
    console.log(updateStatusDto);
    try {
      const statusApproved = await this.knex
        .table('leave_application')
        .update({ status: updateStatusDto.action })
        .where({ id: updateStatusDto.application_id });
      return statusApproved;
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  // create(createLeaveDto: CreateLeaveDto) {
  //   return 'This action adds a new leave';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} leave`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} leave`;
  // }
}
