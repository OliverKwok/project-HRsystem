import {
    Body,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UsePipes,
    ValidationPipe,
    } from '@nestjs/common';
    import { CreateUserDto } from 'src/user(problem)/dtos/user.dtos';
    import { UserService } from 'src/user(problem)/user.service';
    
    @Controller('user')
    export class UserController {
      constructor(private readonly userService: UserService) {}
      
    //   @Get()
    //   getUsers() {
    //     return this.userService.getUsers();
    //   }
      
      @Get('id/:id')
      findUsersById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findUserById(id);
      }
      
      @Post('create')
      @UsePipes(ValidationPipe)
      createUsers(@Body() createUserDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
      }
    }