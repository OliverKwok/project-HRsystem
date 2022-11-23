import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateTitleDto {
  @IsNotEmpty()
  //   @MinLength(0)
  title_name: string;
  @IsNotEmpty()
  dept: string;
}
