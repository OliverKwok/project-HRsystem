import { PartialType } from '@nestjs/mapped-types';
import { CreateLeaveDto } from './create-leave.dto';
import { IsNotEmpty, MinLength } from 'class-validator';

export class UpdateLeaveDto extends PartialType(CreateLeaveDto) {
  @MinLength(0)
  al_leave_taken: number;

  @MinLength(0)
  name: string;
}
