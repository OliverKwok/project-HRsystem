import { Injectable } from '@nestjs/common';
import { CreateStatusupdateDto } from './dto/create-statusupdate.dto';
import { UpdateStatusupdateDto } from './dto/update-statusupdate.dto';

@Injectable()
export class StatusupdateService {
  create(createStatusupdateDto: CreateStatusupdateDto) {
    return 'This action adds a new statusupdate';
  }

  findAll() {
    return `This action returns all statusupdate`;
  }

  findOne(id: number) {
    return `This action returns a #${id} statusupdate`;
  }

  update(id: number, updateStatusupdateDto: UpdateStatusupdateDto) {
    return `This action updates a #${id} statusupdate`;
  }

  remove(id: number) {
    return `This action removes a #${id} statusupdate`;
  }
}
