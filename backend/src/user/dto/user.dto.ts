import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  //   @IsNotEmpty()
  //   @MinLength(3)
  //   username: string;

  @IsNotEmpty()
  // @IsEmail()
  employeeID: string;

  @IsNotEmpty()
  // @IsEmail()
  first_name: string;

  // @IsNotEmpty()
  // // @MinLength(8)
  // last_name: string;
}
