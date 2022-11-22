import { PartialType } from '@nestjs/mapped-types';
import { CreateTitleDto } from './create-title.dto';

export class UpdateTitleDto extends PartialType(CreateTitleDto) {}
