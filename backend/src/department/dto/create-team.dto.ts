import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTeamDto {
  //   @IsNotEmpty()
  @MinLength(0)
  team_name: string;
  //   @IsNotEmpty()
  @MinLength(0)
  belonged_to_dept: string;
}
