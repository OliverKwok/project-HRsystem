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

@Injectable()
export class LeaveService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async showAll() {
    try {
      let res = await this.knex
        .select(
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

  // create(createLeaveDto: CreateLeaveDto) {
  //   return 'This action adds a new leave';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} leave`;
  // }

  // update(id: number, updateLeaveDto: UpdateLeaveDto) {
  //   return `This action updates a #${id} leave`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} leave`;
  // }
}
