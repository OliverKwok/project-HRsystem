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
