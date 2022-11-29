import { IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class DeleteLeaveDto {
  @MinLength(0)
  type: string;

  @MinLength(0)
  id: number;
}
