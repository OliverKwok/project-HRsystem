import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LeaveModule } from './leave/leave.module';

@Module({
  imports: [AuthModule, UserModule, LeaveModule],
})
export class AppModule {}
