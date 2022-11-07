import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InjectKnex, Knex } from 'nestjs-knex';
import { User } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectKnex() private readonly knex: Knex) {}
  //   @InjectRepository(User) private readonly userRepository: Repository<User>,
  // ) {}

  // createUser(createUserDto: CreateUserDto) {
  //   const newUser = this.userRepository.create(createUserDto);
  //   return this.userRepository.save(newUser);
  // }

  // findUserById(id: number) {
  //   return this.userRepository.findOne({where: {id}});
  // }
}
