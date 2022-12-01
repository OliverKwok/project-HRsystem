import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusupdateService } from './statusupdate.service';
import { CreateStatusupdateDto } from './dto/create-statusupdate.dto';
import { UpdateStatusupdateDto } from './dto/update-statusupdate.dto';

@Controller('statusupdate')
export class StatusupdateController {
  constructor(private readonly statusupdateService: StatusupdateService) {}

  @Post()
  create(@Body() createStatusupdateDto: CreateStatusupdateDto) {
    return this.statusupdateService.create(createStatusupdateDto);
  }

  @Get()
  findAll() {
    return this.statusupdateService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statusupdateService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStatusupdateDto: UpdateStatusupdateDto) {
    return this.statusupdateService.update(+id, updateStatusupdateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusupdateService.remove(+id);
  }
}
