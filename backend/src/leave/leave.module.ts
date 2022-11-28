import { Module } from '@nestjs/common';
import { LeaveService } from './leave.service';
import { LeaveController } from './leave.controller';

@Module({
  controllers: [LeaveController],
  providers: [LeaveService]
})
export class LeaveModule {}
