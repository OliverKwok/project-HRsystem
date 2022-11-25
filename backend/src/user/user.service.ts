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
    // console.log(createUserDto);
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
        // change to date format when use formData
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
        // change to date format when use formData
        // status: createUserDto.status,
        // job_nature: createUserDto.job_nature,
        notice_period: createUserDto.notice_period,
        // change to number format when use formData
        report_to: createUserDto.report_to,
        al_leave_entitled_peryear: createUserDto.al_leave_entitled_peryear,
        // change to number format when use formData
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

      console.log(createUserDto.employeeid);
      const checkid = await this.knex
        .table('employee')
        .select('id')
        .where({ employeeid: createUserDto.employeeid });

      const newRole = await this.knex.table('employee_role').insert({
        employeeid: checkid[0].id,
        department_id: createUserDto.department,
        team_id: createUserDto.team,
        title_id: createUserDto.title,
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

  async userReportTo() {
    try {
      const res = await this.knex.raw(
        `select id, concat(employee.first_name,' ',employee.last_name,', ',employee.alias) as full_name from employee
        where
        employee.status = 'probation'
        or employee.status = 'perm'
        or employee.status = 'contract'
        or employee.status = 'other'
        `,
      );

      return res.rows;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async birthdayShowCalendar() {
    try {
      const res = await this.knex.raw(
        `select concat(employee.alias,' ',employee.last_name) as title, TO_CHAR(date_of_birth::date, 'yyyy-mm-dd') as start from employee where date_of_birth is not null`,
      );
      const birthdays = res.rows;

      return birthdays;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }
  async leaveShowCalendar() {
    try {
      const res = await this.knex.raw(
        `select concat(employee.alias,' ',employee.last_name) as title,
        leave_type.type,
        leave_application.status,
        TO_CHAR(leave_application.start_date::date, 'yyyy-mm-dd') as start,
        TO_CHAR(leave_application.end_date::date, 'yyyy-mm-dd') as end,
        leave_application.start_date_period,
        leave_application.end_date_period
        from leave_application 
        inner join employee on leave_application.employee_id = employee.id
        inner join leave_type on leave_application.leave_type = leave_type.id
        where leave_application.status = 'approved'
        or leave_application.status = 'pending'  
        or leave_application.status = 'taken'
        `,
      );
      const leaveDays = res.rows;

      return leaveDays;
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
