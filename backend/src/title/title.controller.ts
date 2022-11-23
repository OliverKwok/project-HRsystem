import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TitleService } from './title.service';
import { CreateTitleDto } from './dto/create-title.dto';
import { UpdateTitleDto } from './dto/update-title.dto';

@Controller('title')
export class TitleController {
  constructor(private readonly titleService: TitleService) {}

  @Get('all')
  async findAll() {
    return this.titleService.findAll();
  }

  @Get('getdept')
  async getDept() {
    return this.titleService.getDept();
  }

  @Post('create')
  createTitle(@Body() createTitleDto: createTitleDto) {
    return this.titleService.createTitle(createTitleDto);
  }

  // @Post()
  // create(@Body() createTitleDto: CreateTitleDto) {
  //   return this.titleService.create(createTitleDto);
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.titleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateTitleDto: UpdateTitleDto) {
  //   return this.titleService.update(+id, updateTitleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.titleService.remove(+id);
  // }
}
