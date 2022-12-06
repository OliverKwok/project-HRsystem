import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('jobStatus')
  getJobStatus() {
    return this.dataService.getJobStatus();
  }

  @Get('yearServiceFemale')
  getYearServiceFemale() {
    return this.dataService.getYearServiceFemale();
  }

  @Get('yearServiceMale')
  getYearServiceMale() {
    return this.dataService.getYearServiceMale();
  }

  @Get('departmentName')
  getDepartmentName() {
    return this.dataService.getDepartmentName();
  }

  @Get('departmentCost')
  getDepartmentCost() {
    return this.dataService.getDepartmentCost();
  }
}
