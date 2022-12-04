// import { Injectable } from '@nestjs/common';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { CheckEIDDto } from './dto/checkEID.dto';
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
        status: createUserDto.status,
        job_nature: createUserDto.job_nature,
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

      const checkid = await this.knex
        .table('employee')
        .select('id')
        .where({ employeeid: createUserDto.employeeid });

      if (createUserDto.contract_end_date != 'Invalid date') {
        const createContractEndDate = await this.knex
          .table('employee')
          .where({ id: checkid[0]['id'] })
          .update({
            contract_end_date: createUserDto.contract_end_date,
          });
      }

      if (createUserDto.probation_end_date != 'Invalid date') {
        const createProbationEndDate = await this.knex
          .table('employee')
          .where({ id: checkid[0]['id'] })
          .update({
            probation_end_date: createUserDto.probation_end_date,
          });
      }

      // const checkid = await this.knex
      //   .table('employee')
      //   .select('id')
      //   .where({ employeeid: createUserDto.employeeid });

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
  async updateUser(updateUserDto: UpdateUserDto) {
    // console.log(updateUserDto);
    try {
      const checkid = await this.knex
        .table('employee')
        .select('id')
        .where({ employeeid: updateUserDto.employeeid });

      const updateEmployee = await this.knex
        .table('employee')
        .where({ id: checkid[0]['id'] })
        .update({
          employeeid: updateUserDto.employeeid,
          first_name: updateUserDto.first_name,
          last_name: updateUserDto.last_name,
          chinese_name: updateUserDto.chinese_name,
          alias: updateUserDto.alias,
          hkid: updateUserDto.hkid,
          passport: updateUserDto.passport,
          gender: updateUserDto.gender,
          nationality: updateUserDto.nationality,
          date_of_birth: updateUserDto.date_of_birth,
          mobile_countrycode: updateUserDto.mobile_countrycode,
          mobile_no: updateUserDto.mobile_no,
          work_phone_no: updateUserDto.work_phone_no,
          email_personal: updateUserDto.email_personal,
          email_work: updateUserDto.email_work,
          highest_education: updateUserDto.highest_education,
          institution_name: updateUserDto.institution_name,
          major: updateUserDto.major,
          last_job_company: updateUserDto.last_job_company,
          last_job_title: updateUserDto.last_job_title,
          start_date: updateUserDto.start_date,
          status: updateUserDto.status,
          job_nature: updateUserDto.job_nature,
          notice_period: updateUserDto.notice_period,
          report_to: updateUserDto.report_to,
          al_leave_entitled_peryear: updateUserDto.al_leave_entitled_peryear,
          pay_currency: updateUserDto.pay_currency,
          basic_salary: updateUserDto.basic_salary,
          payment_method: updateUserDto.payment_method,
          home_address: updateUserDto.home_address,
          bank_code: updateUserDto.bank_code,
          bank_name: updateUserDto.bank_name,
          bank_number: updateUserDto.bank_number,
          bank_payee: updateUserDto.bank_payee,
          payment_remark: updateUserDto.payment_remark,
        });

      if (updateUserDto.contract_end_date != 'Invalid date') {
        const updateContractEndDate = await this.knex
          .table('employee')
          .where({ id: checkid[0]['id'] })
          .update({
            contract_end_date: updateUserDto.contract_end_date,
          });
      }

      if (updateUserDto.probation_end_date != 'Invalid date') {
        const updateProbationEndDate = await this.knex
          .table('employee')
          .where({ id: checkid[0]['id'] })
          .update({
            probation_end_date: updateUserDto.probation_end_date,
          });
      }

      const updateRole = await this.knex
        .table('employee_role')
        .where({ id: checkid[0]['id'] })
        .update({
          employeeid: checkid[0].id,
          department_id: updateUserDto.department,
          team_id: updateUserDto.team,
          title_id: updateUserDto.title,
        });

      return { updateEmployee };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async getAllInfo(id) {
    try {
      const infoFromEmployee = await this.knex
        .table('employee')
        .select()
        .where({ id: id });

      return infoFromEmployee[0];
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(username: string) {
    const checkByWorkEmail = await this.knex
      .table('employee')
      .select('password', 'employee.id')
      .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
      .where({ email_work: username })
      .where('employee_role.department_id', '=', '6');

    // console.log(checkByWorkEmail);

    return {
      id: checkByWorkEmail[0].id,
      username: username,
      password: await bcrypt.hash(checkByWorkEmail[0].password, 10),
    };
    // return {
    //   id: 1,
    //   username: username,
    //   password: await bcrypt.hash('1', 10),
    // };
  }

  async findIOSUser(username: string) {
    const checkByWorkEmail = await this.knex
      .table('employee')
      .select('password', 'employee.id')
      .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
      .where({ email_work: username });
    // .where('employee_role.department_id', '=', '6');

    // console.log(checkByWorkEmail);

    return {
      id: checkByWorkEmail[0].id,
      username: username,
      password: await bcrypt.hash(checkByWorkEmail[0].password, 10),
    };
    // return {
    //   id: 1,
    //   username: username,
    //   password: await bcrypt.hash('1', 10),
    // };
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
        `select id, concat(employee.last_name,' ',employee.first_name,', ',employee.alias) as full_name from employee
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

  async getUpdateStatus() {
    try {
      const allStatus = await this.knex
        .select(
          // '*',
          'employee.id',
          this.knex.raw(
            `concat(UPPER(employee.last_name), ' ', employee.first_name, ', ', employee.alias) as employee_name`,
          ),
          'title.title_name',
          'employee.status',
          'employee.profilepic',
          'employee.contract_end_date',
          'employee.probation_end_date',
        )
        .from('employee_role')
        .join('employee', 'employee_role.employeeid', '=', 'employee.id')
        .join('title', 'employee_role.title_id', '=', 'title.id')
        .where({ 'employee.status': 'probation' })
        .orWhere({ 'employee.status': 'contract' });
      return allStatus;
    } catch (err) {
      console.log(err);
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async checkEID(eid: string) {
    console.log(eid, typeof eid);
    let parsedEID = parseInt(eid);
    console.log(parsedEID, typeof parsedEID);
    try {
      if (!isNaN(parsedEID)) {
        const EidEmployeeDetails = await this.knex
          .select('*')
          .from('employee_role')
          .join('employee', 'employee_role.employeeid', '=', 'employee.id')
          .join('title', 'employee_role.title_id', '=', 'title.id')
          .join(
            'department',
            'employee_role.department_id',
            '=',
            'department.id',
          )
          .join('team', 'employee_role.team_id', '=', 'team.id')
          .where({ 'employee.id': parsedEID });
        return EidEmployeeDetails[0];
      } else {
        return;
      }
    } catch (err) {
      console.log(err);
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
