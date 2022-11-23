import { IsNotEmpty } from 'class-validator';

export class CreateTitleDto {
  @IsNotEmpty()
  title_name: string;
  @IsNotEmpty()
  dept: string;
}
