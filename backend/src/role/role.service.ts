import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Injectable()
export class RoleService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  async create(createRoleDto: CreateRoleDto) {
    try {
      const checkid = await this.knex
        .table('employee')
        .select('id')
        .where({ employeeid: createRoleDto.employeeid });

      const newRole = await this.knex.table('employee_role').insert({
        employeeid: checkid['id'],
        department_id: createRoleDto.department_id,
        team_id: createRoleDto.team_id,
        title_id: createRoleDto.title_id,
      });

      return { newRole };
    } catch (err) {
      throw new HttpException(err, HttpStatus.BAD_REQUEST);
    }
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
