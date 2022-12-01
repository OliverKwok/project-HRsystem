import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateIosAppDto } from './create-ios_app.dto';

export class UpdateIosAppDto extends PartialType(CreateIosAppDto) {
  @IsNumber()
  id: number;
}
