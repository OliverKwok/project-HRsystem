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
        chinese_name: createUserDto.chinese_name,
        alias: createUserDto.alias,
        hkid: createUserDto.hkid,
        passport: createUserDto.passport,
        gender: createUserDto.gender,
        nationality: createUserDto.nationality,
        date_of_birth: createUserDto.date_of_birth,
        // profilepic: createUserDto.profilepic,
        mobile_countrycode: createUserDto.mobile_countrycode,
        mobile_no: createUserDto.mobile_no,
        work_phone_no: createUserDto.work_phone_no,
        email_personal: createUserDto.email_personal,
        email_work: createUserDto.email_work,
        // password: createUserDto.password,
        highest_education: createUserDto.highest_education,
        institution_name: createUserDto.institution_name,
        major: createUserDto.major,
        last_job_company: createUserDto.last_job_company,
        last_job_title: createUserDto.last_job_title,
        start_date: createUserDto.start_date,
        // status: createUserDto.status,
        // job_nature: createUserDto.job_nature,
        notice_period: createUserDto.notice_period,
        report_to: createUserDto.report_to,
        al_leave_entitled_peryear: createUserDto.al_leave_entitled_peryear,
        pay_currency: createUserDto.pay_currency,
        basic_salary: createUserDto.basic_salary,
        payment_method: createUserDto.payment_method,
        home_address: createUserDto.home_address,
        bank_code: createUserDto.bank_code,
        bank_name: createUserDto.bank_name,
        bank_number: createUserDto.bank_number,
        bank_payee: createUserDto.bank_payee,
        payment_remark: createUserDto.payment_remark,
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
