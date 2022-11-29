import { PartialType } from '@nestjs/mapped-types';
import { CreateIosAppDto } from './create-ios_app.dto';

export class UpdateIosAppDto extends PartialType(CreateIosAppDto) {}
