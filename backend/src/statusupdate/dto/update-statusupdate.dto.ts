import { PartialType } from '@nestjs/mapped-types';
import { CreateStatusupdateDto } from './create-statusupdate.dto';

export class UpdateStatusupdateDto extends PartialType(CreateStatusupdateDto) {}
