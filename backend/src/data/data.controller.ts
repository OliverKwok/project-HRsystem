import { Controller, Get } from '@nestjs/common';
import { DataService } from './data.service';

@Controller('data')
export class DataController {
  constructor(private readonly dataService: DataService) {}

  @Get('jobStatus')
  getJobStatus() {
    return this.dataService.getJobStatus();
  }

  @Get('yearService')
  getYearService() {
    return this.dataService.getYearService();
  }
}
