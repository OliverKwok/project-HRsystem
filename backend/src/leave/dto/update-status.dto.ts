// import { PartialType } from '@nestjs/mapped-types';
// import { CreateLeaveDto } from './create-leave.dto';
import { IsNotEmpty, MinLength, IsNumber } from 'class-validator';

export class UpdateStatusDto {
  @MinLength(0)
  application_id: string;
}
