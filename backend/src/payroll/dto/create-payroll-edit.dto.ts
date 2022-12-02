import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreatePayrollEditDto {
  @IsNotEmpty()
  year: string;
  @IsNotEmpty()
  month: string;
  @IsNotEmpty()
  employeeid: string;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty()
  updated_value: string;
}
