import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty()
  employeeid: string;

  @IsNotEmpty()
  department_id: string;

  @IsNotEmpty()
  team_id: string;

  @IsNotEmpty()
  title_id: string;
}
