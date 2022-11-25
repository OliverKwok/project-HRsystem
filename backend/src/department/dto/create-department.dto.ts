import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateDepartmentDto {
  //   @IsNotEmpty()
  @MinLength(0)
  dept_name: string;
  //   @IsNotEmpty()
  @MinLength(0)
  managed_by: string;
}
