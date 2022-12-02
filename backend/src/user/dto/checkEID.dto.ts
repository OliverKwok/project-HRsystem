import { IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CheckEIDDto {
  @MinLength(0)
  id: string;

}
