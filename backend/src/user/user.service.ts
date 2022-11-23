// import { Injectable } from '@nestjs/common';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable({})
export class UserService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  
  async createUser(createUserDto: CreateUserDto) {
    console.log(createUserDto);
    try {
      const newEmployee = await this.knex.table('employee').insert({
        employeeid: createUserDto.employeeid,
        first_name: createUserDto.first_name,
        last_name: createUserDto.last_name,
        hkid: createUserDto.hkid,
        gender: createUserDto.gender,
        nationality: createUserDto.nationality,
        date_of_birth: createUserDto.date_of_birth,
        mobile_countrycode: createUserDto.mobile_countrycode,
        mobile_no: createUserDto.mobile_no,
        email_personal: createUserDto.email_personal,
        email_work: createUserDto.email_work,
        // password: createUserDto.password,

        start_date: createUserDto.start_date,
        notice_period: createUserDto.notice_period,
        pay_currency: createUserDto.pay_currency,
        basic_salary: createUserDto.basic_salary,
      });

      return { newEmployee };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(username: string) {
    return {
      id: 1,
      username: username,
      password: await bcrypt.hash('1', 10),
    };
  }

  async userCount() {
    try {
      const res = await this.knex('employee').max('id as maxid').first();
      const maxid = res.maxid;
      return { maxid };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
}

// upload file code
// signup(@UploadedFile() file, @Body() body) {
//   console.log(file);
//   console.log(body);
// }

// return {message: 'reach create user'}

// async function insertUser (knex: Knex, createUserDto: CreateUserDto): Promise<void> {
//   const ids = knex
//   .insert({
//     employeeID: createUserDto.employeeID,
//     date_of_birth: "1971-01-02",
//   })
//   .into("employee")
//   .returning("id");
//   return ids
//   }
