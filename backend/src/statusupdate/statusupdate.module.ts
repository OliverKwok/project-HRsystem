import { Module } from '@nestjs/common';
import { StatusupdateService } from './statusupdate.service';
import { StatusupdateController } from './statusupdate.controller';

@Module({
  controllers: [StatusupdateController],
  providers: [StatusupdateService]
})
export class StatusupdateModule {}
