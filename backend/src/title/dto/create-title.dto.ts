import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTitleDto {
  //   @IsNotEmpty()
  @MinLength(0)
  title_name: string;
  //   @IsNotEmpty()
  @MinLength(0)
  dept: string;
}
