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
        // last_Name: createUserDto.last_name,
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
      const res = await this.knex('employee').max('id as maxId').first();
      const maxId = res.maxId;
      return { maxId };
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
