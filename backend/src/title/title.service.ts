import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';
import { InjectKnex, Knex } from 'nestjs-knex';

@Injectable()
export class TitleService {
  constructor(@InjectKnex() private readonly knex: Knex) {}

  async findAll() {
    try {
      const allTitles = await this.knex.raw(
        `select title.title_name, department.dept_name, team.team_name,
        employee.id,
        employee.employeeid,
        employee.first_name,
        employee.last_name,
        employee.chinese_name,
        employee.alias,
        employee.hkid,
        employee.passport,
        employee.gender,
        employee.nationality,
        employee.date_of_birth,
        employee.job_nature,
        employee.profilepic,

        employee.mobile_countrycode,
        employee.mobile_no,
        employee.work_phone_no,
        employee.email_personal,
        employee.email_work,

        employee.highest_education,
        employee.institution_name,
        employee.major,
        employee.last_job_company,
        employee.last_job_title,

        employee.pay_currency,
        employee.basic_salary,
        employee.payment_method,
        employee.home_address,
        employee.bank_code,
        employee.bank_name,
        employee.bank_number,
        employee.bank_payee,
        employee.payment_remark



      from employee_role 
      join employee on employee_role.employeeid = employee.id 
      join title on employee_role.title_id = title.id
      join department on employee_role.department_id = department.id
      join team on employee_role.team_id = team.id`,
      );
      return allTitles.rows;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async getDept() {
    try {
      const allDept = await this.knex.raw(`select dept_name from department`);
      return allDept.rows;
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  async createTitle(createTitleDto: CreateTitleDto) {
    console.log(createTitleDto);
    try {
      // const find_dept_id = await this.knex.raw(
      //   `select id from Department where dept_name = '${createTitleDto.dept}'`,
      // );
      // const dept_id_to_insert = find_dept_id.rows[0].json;
      // console.log(dept_id_to_insert);

      const newTitle = await this.knex.table('title').insert({
        title_name: createTitleDto.title_name,
        dept: createTitleDto.dept,
      });
      return { newTitle };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  // create(createTitleDto: CreateTitleDto) {
  //   return 'This action adds a new title';
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} title`;
  // }

  // update(id: number, updateTitleDto: UpdateTitleDto) {
  //   return `This action updates a #${id} title`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} title`;
  // }
}
