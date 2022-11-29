import { PartialType } from '@nestjs/mapped-types';
import { CreateLeaveDto } from './create-leave.dto';
import { IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class UpdateLeaveDto extends PartialType(CreateLeaveDto) {
  @IsNumber()
  al_leave_taken: number;
  // @MinLength(0)
  @IsNumber()
  id: number;
}
