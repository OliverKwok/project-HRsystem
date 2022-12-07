import { InjectKnex, Knex } from 'nestjs-knex';
import {
  HttpException,
  Injectable,
  HttpStatus,
  ConsoleLogger,
  MethodNotAllowedException,
} from '@nestjs/common';
import { CreateIosAppDto } from './dto/create-ios_app.dto';
import { UpdateIosAppDto } from './dto/update-ios_app.dto';

interface leaveApplicationFormType {
  employeeID: string;
  leaveType: number;
  startDate: string;
  startDateDuration: string;
  endDate: string;
  endDateDuration: string;
  workingDays: number;
}

@Injectable()
export class IosAppService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async leaveRecord(userId: number) {
    let res = await this.knex
      .select('leave_application.*', 'leave_type.type')
      .from('leave_application')
      .join('leave_type', 'leave_application.leave_type', 'leave_type.id')
      .where('employee_id', userId);
    return { res };
  }

  async leaveType() {
    let res = await this.knex.select('*').from('leave_type');
    return { res };
  }

  async createLeaveApplication(data: leaveApplicationFormType) {
    console.log(data);

    let res = await this.knex
      .table('leave_application')
      .insert({
        employee_id: data.employeeID,
        leave_type: data.leaveType,
        start_date: data.startDate,
        start_date_period: data.startDateDuration,
        end_date: data.endDate,
        end_date_period: data.endDateDuration,
        number_of_days: data.workingDays,
        status: 'pending',
        remarks: data['remarks'],
      })
      .returning('id');

    return { res };
  }

  async cancelLeave(updateIosAppDto: UpdateIosAppDto) {
    console.log(updateIosAppDto);

    try {
      let res = await this.knex
        .update({
          status: 'cancelled',
        })
        .table('leave_application')
        .where({
          id: updateIosAppDto.id,
        });
      return { res };
    } catch (err) {
      console.log(err);
    }
  }

  async getEvent() {
    try {
      let res = await this.knex.select('*').from('event');
      return { res };
    } catch (err) {
      console.log(err);
    }
  }

  async getAttendance(userId: number) {
    try {
      let res = await this.knex
        .select('*')
        .from('attendance')
        .where('employee', userId);
      return { res };
    } catch (err) {
      return err;
    }
  }

  async getPHolidays() {
    try {
      let res = await this.knex.select('*').from('public_holidays');

      res = res.map((data) => {
        return this.dateFormatter(data.date);
      });
      return { res };
    } catch (err) {
      return err;
    }
  }

  async getHolidaysName() {
    try {
      let res = await this.knex.select('*').from('public_holidays');

      return { res };
    } catch (err) {
      return err;
    }
  }

  async getNotifications() {
    try {
      let res = await this.knex.select('*').from('notification');
      console.log(res);

      return { res };
    } catch (err) {
      return err;
    }
  }

  async getPayslip(userId: number) {
    try {
      let res = await this.knex
        .select('*')
        .from('payroll')
        .where('employeeid', userId)
        .orderBy('month', 'desc');

      return { res };
    } catch (err) {
      return err;
    }
  }

  dateFormatter(dateString: string) {
    // Create a date object from a date string
    var date = new Date(dateString);

    // Get year, month, and day part from the date
    var year = date.toLocaleString('default', { year: 'numeric' });
    var month = date.toLocaleString('default', { month: '2-digit' });
    var day = date.toLocaleString('default', { day: '2-digit' });

    // Generate yyyy-mm-dd date string
    var formattedDate = year + '-' + month + '-' + day;
    return formattedDate;
  }

  async addFirebaseToken(data) {
    console.log(data);
    let res_pre = await this.knex
      .table('employee')
      .select('employee.firebase_token')
      .where('id', data['employeeId']);

    console.log(res_pre[0]);

    if (!res_pre[0]) {
      let res = await this.knex
        .table('employee')
        .insert({
          firebase_token: data['firebase_token'],
        })
        .where('id', data['employeeId'])
        .returning('id');
      return { res };
    }
    {
      let res = await this.knex
        .table('employee')
        .update({
          firebase_token: data['firebase_token'],
        })
        .where('id', data['employeeId'])
        .returning('id');
      return { res };
    }
  }

  async getProfile(userId: number) {
    try {
      let res = await this.knex
        .select('*')
        .from('employee')
        .where('id', userId);

      return { res };
    } catch (err) {
      return err;
    }
  }

  async getUserStatus(userId: number) {
    try {
      let res = await this.knex
        .select('employee.id', 'employee.status', 'employee.email_work')
        .from('employee')
        .where('id', userId);
      // console.log(res);

      return { res };
    } catch (err) {
      return err;
    }
  }
  // create(createIosAppDto: CreateIosAppDto) {
  //   return 'This action adds a new iosApp';
  // }
  // findAll() {
  //   return `This action returns all iosApp`;
  // }
  // findOne(id: number) {
  //   return `This action returns a #${id} iosApp`;
  // }
  // update(id: number, updateIosAppDto: UpdateIosAppDto) {
  //   return `This action updates a #${id} iosApp`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} iosApp`;
  // }
}
