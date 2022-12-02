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
      const newPayrollEditRecord = await this.knex
        .table('payroll_edit_history')
        .insert({
          year: createPayrollEditDto.year,
          month: createPayrollEditDto.month,
          employeeid: createPayrollEditDto.employeeid,
          category: createPayrollEditDto.category,
          updated_value: createPayrollEditDto.updated_value,
        });

      return { newPayrollEditRecord };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  // create(createPayrollDto: CreatePayrollDto) {
  //   return { result: 'monthly record added' };
  // }

  findAll() {
    return `This action returns all payroll`;
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
