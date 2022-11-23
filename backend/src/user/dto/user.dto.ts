import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  employeeid: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  hkid: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  nationality: string;

  @IsNotEmpty()
  date_of_birth: Date;

  @IsNotEmpty()
  mobile_countrycode: string;

  @IsNotEmpty()
  @MinLength(8)
  mobile_no: string;

  @IsEmail()
  @IsNotEmpty()
  email_personal: string;

  @IsEmail()
  @IsNotEmpty()
  email_work: string;

  // @IsNotEmpty()
  // password: string;

  @IsNotEmpty()
  start_date: Date;

  @IsNotEmpty()
  notice_period: number;

  @IsNotEmpty()
  pay_currency: string;

  @IsNotEmpty()
  basic_salary: number;
}
