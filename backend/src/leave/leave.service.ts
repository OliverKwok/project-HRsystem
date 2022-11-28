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
            `concat(employee.last_name, ' ', employee.first_name) as name`,
          ),
          // this.knex.raw(
          //   `"'al_leave_entitled_peryear' - 'al_leave_taken'" as remainingAL`,
          // ),
        )
        .from('employee');
      return { res };
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

  // update(id: number, updateLeaveDto: UpdateLeaveDto) {
  //   return `This action updates a #${id} leave`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} leave`;
  // }
}
