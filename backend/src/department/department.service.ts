import { Injectable } from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  create(createDepartmentDto: CreateDepartmentDto) {
    return 'This action adds a new department';
  }

  async refineData(data: any[]) {
    data.forEach((element) => {
      element.data = {
        name: element.name,
        avatar: element.profilepic,
      };
      delete element['name'];
      delete element.profilepic;
    });
  }

  async editData(data: any[]) {
    data.forEach((element) => {
      if (element.employee_id) {
        element.expanded = true;
        element.className = 'p-person';
        element.type = 'person';
      } else if (element.hasOwnProperty('head_of_dept')) {
        element.expanded = true;
        element.className = `department`;
      } else {
        // } else if (element.hasOwnProperty('team_id')) {
        element.expanded = true;
        element.className = `team`;
      }
    });
  }

  async getCEO() {
    let ceo = await this.knex
      .select(
        'employee.id as employee_id',
        'title_name as label',
        this.knex.raw(
          "json_build_object('name', concat(employee.first_name, ' ', employee.last_name), 'avatar', profilepic) as data",
        ),
        // this.knex.raw(
        //   "case when employee.id is not null then 'person' end type",
        // ),
        // this.knex.raw(
        //   "case when employee.id is not null then 'p-person' end className",
        // ),
      )
      .from('employee')
      .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
      .join('title', 'title.id', '=', 'employee_role.title_id')
      .where('title_name', 'CEO');
    this.editData(ceo);
    return ceo;
  }

  async getChief() {
    let chief = await this.knex
      .select(
        this.knex.raw(
          `concat(employee.first_name, ' ', employee.last_name) as name`,
        ),
        'employee.id as employee_id',
        'employee.profilepic',
      )
      .distinct('title_name as label')
      .whereNot('title_name', 'CEO')
      .from('employee')
      .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
      .join('title', 'title.id', '=', 'employee_role.title_id')
      .join('department', 'department.managed_by', '=', 'employee.id');
    this.editData(chief);
    this.refineData(chief);
    // console.log(chief);
    return chief;
  }

  async getDepartments(managers: number[]) {
    let departments = await this.knex
      .select('id', 'dept_name as label', 'managed_by', 'head_of_dept')
      .from('department');
    this.editData(departments);
    // console.log({ departments });
    let heads = await this.getHeadOfDept();
    heads.forEach((x) => managers.push(x.employee_id));
    let teams = await this.getTeams(managers);
    heads.forEach((head) => {
      let team = teams.filter(
        (team) => team.belonged_to_dept === head.department_id,
      );
      head['children'] = team ? team : [];
    });
    departments.forEach((department) => {
      department['children'] = department.head_of_dept
        ? heads.filter((head) => head.employee_id === department.head_of_dept)
        : teams.filter((team) => team.belonged_to_dept === department.id);
    });
    return departments;
  }

  async getHeadOfDept() {
    let head = await this.knex
      .select(
        'department.id as department_id',
        this.knex.raw(
          `concat(employee.first_name, ' ', employee.last_name) as name`,
        ),
        'employee.id as employee_id',
        'employee.profilepic',
      )
      .distinct('title_name as label')
      .from('employee')
      .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
      .join('title', 'title.id', '=', 'employee_role.title_id')
      .join('department', 'department.head_of_dept', '=', 'employee.id');
    // console.log({ head });
    this.editData(head);
    this.refineData(head);
    return head;
  }

  async getTeams(managers: number[]) {
    let team = await this.knex
      .select(
        'team.id as team_id',
        'team_name as label',
        'belonged_to_dept',
        this.knex.raw(
          "json_agg(json_build_object('profilepic', employee.profilepic, 'employee_id', employee.id,'name', concat(employee.first_name, ' ', employee.last_name), 'label', title_name)) as children",
        ),
      )
      .from('employee')
      .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
      .join('title', 'title.id', '=', 'employee_role.title_id')
      .join('team', 'team.id', '=', 'employee_role.team_id')
      .groupBy('team.id')
      .whereNotIn('employee.id', managers);
    this.editData(team);
    team.forEach((element) => {
      this.editData(element.children);
      this.refineData(element.children);
    });
    console.dir(team, { depth: 10 });
    return team;
  }

  async getEmployees() {
    let employees = await this.knex
      .select(
        'employee.id as employee_id',
        'employee.profilepic',
        'title.title_name as label',
        'employee.report_to',
        this.knex.raw(
          "json_agg(json_build_object('profilepic', employee.profilepic, 'employee_id', employee.id,'name', concat(employee.first_name, ' ', employee.last_name), 'label', title_name)) as children",
        ),
      )
      .from('employee')
      .join('title', 'title.id', '=', 'employee_role.title_id')
      .groupBy('report_to');
    this.editData(employees);
    this.refineData(employees);
    return employees;
  }

  async getOrgChart() {
    try {
      let managers = [];
      let result = {};

      let ceo = await this.getCEO();
      ceo.forEach((x) => managers.push(x.employee_id));
      result = ceo[0];

      let chief = await this.getChief();
      chief.forEach((x) => managers.push(x.employee_id));
      result['children'] = chief;

      let departments = await this.getDepartments(managers);
      result['children'].forEach((chief) => {
        chief['children'] = departments.filter(
          (department) => department.managed_by === chief.employee_id,
        );
      });

      return [result];
    } catch (error) {
      console.log(error);

      return 'not ok';
    }
  }

  async findAll() {
    const res = await this.knex.select('dept_name').from('department');
    return res;
  }

  findOne(id: number) {
    return `This action returns a #${id} department`;
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return `This action updates a #${id} department`;
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
