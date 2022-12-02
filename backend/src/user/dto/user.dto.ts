import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  employeeid: string;

  @IsNotEmpty()
  first_name: string;

  @IsNotEmpty()
  last_name: string;

  @MinLength(0)
  chinese_name: string;

  @MinLength(0)
  alias: string;

  @IsNotEmpty()
  hkid: string;

  @MinLength(0)
  passport: string;

  @IsNotEmpty()
  gender: string;

  @IsNotEmpty()
  nationality: string;

  @IsNotEmpty()
  date_of_birth: Date;

  // @MinLength(0)
  // profilepic: string;

  @IsNotEmpty()
  mobile_countrycode: string;

  @IsNotEmpty()
  @MinLength(8)
  mobile_no: string;

  @MinLength(0)
  work_phone_no;

  @IsEmail()
  @IsNotEmpty()
  email_personal: string;

  @IsEmail()
  @IsNotEmpty()
  email_work: string;

  // @IsNotEmpty()
  // password: string;

  @MinLength(0)
  highest_education: string;

  @MinLength(0)
  institution_name: string;

  @MinLength(0)
  major: string;

  @MinLength(0)
  last_job_company: string;

  @MinLength(0)
  last_job_title: string;

  @IsNotEmpty()
  start_date: Date;

  @MinLength(0)
  status: string;

  @IsNotEmpty()
  contract_end_date: Date;

  @IsNotEmpty()
  probation_end_date: Date;

  @MinLength(0)
  job_nature: string;

  @IsNotEmpty()
  notice_period: number;

  @IsNotEmpty()
  report_to: number;

  @IsNotEmpty()
  al_leave_entitled_peryear: number;

  @IsNotEmpty()
  pay_currency: string;

  @IsNotEmpty()
  basic_salary: number;

  @MinLength(0)
  payment_method: string;

  @MinLength(0)
  home_address: string;

  @MinLength(0)
  bank_code: string;

  @MinLength(0)
  bank_name: string;

  @MinLength(0)
  bank_number: string;

  @MinLength(0)
  bank_payee: string;

  @MinLength(0)
  payment_remark: string;

  //////////////
  @IsNotEmpty()
  department: string;
  @IsNotEmpty()
  team: string;
  @IsNotEmpty()
  title: string;
}

export class UpdateUserDto {
  @IsNotEmpty()
  employeeid: string;
  @IsNotEmpty()
  first_name: string;
  @IsNotEmpty()
  last_name: string;
  @MinLength(0)
  chinese_name: string;
  @MinLength(0)
  alias: string;
  @IsNotEmpty()
  hkid: string;
  @MinLength(0)
  passport: string;
  @IsNotEmpty()
  gender: string;
  @IsNotEmpty()
  nationality: string;
  @IsNotEmpty()
  date_of_birth: Date;
  // @MinLength(0)
  // profilepic: string;
  @IsNotEmpty()
  mobile_countrycode: string;
  @IsNotEmpty()
  @MinLength(8)
  mobile_no: string;
  @MinLength(0)
  work_phone_no;
  @IsEmail()
  @IsNotEmpty()
  email_personal: string;
  @IsEmail()
  @IsNotEmpty()
  email_work: string;
  // @IsNotEmpty()
  // password: string;
  @MinLength(0)
  highest_education: string;
  @MinLength(0)
  institution_name: string;
  @MinLength(0)
  major: string;
  @MinLength(0)
  last_job_company: string;
  @MinLength(0)
  last_job_title: string;
  @IsNotEmpty()
  start_date: Date;
  @MinLength(0)
  status: string;
  @MinLength(0)
  job_nature: string;
  @IsNotEmpty()
  notice_period: number;
  @IsNotEmpty()
  report_to: number;
  @IsNotEmpty()
  al_leave_entitled_peryear: number;
  @IsNotEmpty()
  pay_currency: string;
  @IsNotEmpty()
  basic_salary: number;
  @MinLength(0)
  payment_method: string;
  @MinLength(0)
  home_address: string;
  @MinLength(0)
  bank_code: string;
  @MinLength(0)
  bank_name: string;
  @MinLength(0)
  bank_number: string;
  @MinLength(0)
  bank_payee: string;
  @MinLength(0)
  payment_remark: string;
  //
  @IsNotEmpty()
  department: string;
  @IsNotEmpty()
  team: string;
  @IsNotEmpty()
  title: string;
}
