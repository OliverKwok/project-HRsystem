import { IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class CreateLeaveDto {
  @MinLength(0)
  type: string;
}
