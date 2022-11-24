// import { Injectable } from '@nestjs/common';
// import { InjectKnex, Knex } from 'nestjs-knex';
// import { CreateDepartmentDto } from './dto/create-department.dto';
// import { UpdateDepartmentDto } from './dto/update-department.dto';

// @Injectable()
// export class DepartmentService {
//   constructor(@InjectKnex() private readonly knex: Knex) {}
//   create(createDepartmentDto: CreateDepartmentDto) {
//     return 'This action adds a new department';
//   }

//   async getCEO() {
//     let ceoAll = [];
//     try {
//       let ceo = await this.knex
//         .select(
//           // this.knex.raw(
//           //   `concat(employee.first_name, ' ', employee.last_name) as name`,
//           // ),
//           'employee.id as employee_id',
//           'title_name as label',
//           // 'profilepic',
//         )
//         .from('employee')
//         .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
//         .join('title', 'title.id', '=', 'employee_role.title_id')
//         .where('title_name', 'CEO');
//       // console.log(ceo);
//       ceoAll.push(ceo);

//       if (ceo.hasOwnProperty('employee_id')) {
//         ceoAll.push({ type: 'person' });
//       }

//       ceoAll.push({expanded:true})

//       let data = [];
//       let personData = await this.knex
//         .select(
//           this.knex.raw(
//             `concat(employee.first_name, ' ', employee.last_name) as name`,
//           ),
//           `profilepic as avatar`,
//         )
//         .from('employee')
//         .where('title_name', 'CEO');
//       data.push({ personData });

//       ceoAll.push(data);

//       // return ceoAll;
//       console.log(ceoAll);
//     } catch (err) {
//       console.log(err);
//       return 'not ok';
//     }
//   }

//   async getChief() {
//     let chief = await this.knex
//       .select(
//         this.knex.raw(
//           `concat(employee.first_name, ' ', employee.last_name) as name`,
//         ),
//         'employee.id as employee_id',
//         'employee.profilepic',
//       )
//       .distinct('title_name as title')
//       .from('employee')
//       .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
//       .join('title', 'title.id', '=', 'employee_role.title_id')
//       .join('department', 'department.managed_by', '=', 'employee.id');

//     // console.log(chief);
//     return chief;
//   }

//   async getDepartments(managers: number[]) {
//     let departments = await this.knex
//       .select('id', 'dept_name', 'managed_by', 'head_of_dept')
//       .from('department');

//     // console.log({ departments });
//     let heads = await this.getHeadOfDept();
//     heads.forEach((x) => managers.push(x.employee_id));
//     let teams = await this.getTeams(managers);
//     heads.forEach((head) => {
//       let team = teams.find(
//         (team) => team.belonged_to_dept === head.department_id,
//       );
//       head['children'] = team ? team.member : [];
//     });
//     departments.forEach((department) => {
//       department['children'] = department.head_of_dept
//         ? heads.filter((head) => head.employee_id === department.head_of_dept)
//         : teams.filter((team) => team.belonged_to_dept === department.id);
//     });
//     return departments;
//   }

//   async getHeadOfDept() {
//     let head = await this.knex
//       .select(
//         'department.id as department_id',
//         this.knex.raw(
//           `concat(employee.first_name, ' ', employee.last_name) as name`,
//         ),
//         'employee.id as employee_id',
//         'employee.profilepic',
//       )
//       .distinct('title_name as title')
//       .from('employee')
//       .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
//       .join('title', 'title.id', '=', 'employee_role.title_id')
//       .join('department', 'department.head_of_dept', '=', 'employee.id');

//     // console.log({ head });
//     return head;
//   }

//   async getTeams(managers: number[]) {
//     let team = await this.knex
//       .select(
//         'team.id as team_id',
//         'team_name',
//         'belonged_to_dept',
//         this.knex.raw(
//           "json_agg(json_build_object('name', concat(employee.first_name, ' ', employee.last_name), 'title', title_name)) as member",
//         ),
//       )
//       .from('employee')
//       .join('employee_role', 'employee.id', '=', 'employee_role.employeeid')
//       .join('title', 'title.id', '=', 'employee_role.title_id')
//       .join('team', 'team.id', '=', 'employee_role.team_id')
//       .groupBy('team.id')
//       .whereNotIn('employee.id', managers);

//     console.dir(team, { depth: 5 });
//     return team;
//   }

//   async getOrgChart() {
//     try {
//       let managers = [];
//       let result = {};

//       let ceo = await this.getCEO();
//       ceo.forEach((x) => managers.push(x.employee_id));
//       result = ceo[0];

//       let chief = await this.getChief();
//       chief.forEach((x) => managers.push(x.employee_id));
//       result['children'] = chief;

//       let departments = await this.getDepartments(managers);
//       result['children'].forEach((chief) => {
//         chief['children'] = departments.filter(
//           (department) => department.managed_by === chief.employee_id,
//         );
//       });

//       return result;
//     } catch (error) {
//       console.log(error);

//       return 'not ok';
//     }
//   }

//   findAll() {
//     return `This action returns all department`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} department`;
//   }

//   update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
//     return `This action updates a #${id} department`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} department`;
//   }
// }
