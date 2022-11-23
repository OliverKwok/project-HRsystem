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

  @IsNotEmpty()
  @MinLength(8)
  work_phone_no;

  @IsEmail()
  @IsNotEmpty()
  email_personal: string;

  @IsEmail()
  @IsNotEmpty()
  email_work: string;

  // @IsNotEmpty()
  // password: string;

  @IsNotEmpty()
  highest_education: string;

  @IsNotEmpty()
  institution_name: string;

  @IsNotEmpty()
  major: string;

  @IsNotEmpty()
  last_job_company: string;

  @IsNotEmpty()
  last_job_title: string;

  @IsNotEmpty()
  start_date: Date;

  @IsNotEmpty()
  status: string;

  @IsNotEmpty()
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

  @IsNotEmpty()
  payment_method: string;

  @IsNotEmpty()
  home_address: string;

  @IsNotEmpty()
  bank_code: string;

  @IsNotEmpty()
  bank_name: string;

  @IsNotEmpty()
  bank_number: string;

  @IsNotEmpty()
  bank_payee: string;

  @IsNotEmpty()
  payment_remark: string;
}
