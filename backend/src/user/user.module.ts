// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from 'src/typeorm';

// @Module({
//     imports: [TypeOrmModule.forFeature([User]),],

// })
// export class UserModule {}


import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
    controllers: [UserController],
    providers: [UserService]})
export class UserModule{

}
