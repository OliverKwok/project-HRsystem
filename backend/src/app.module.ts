import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { KnexModule } from 'nestjs-knex';
import * as config from '../knexfile';
import { config as Config } from 'dotenv';
import { DepartmentModule } from './department/department.module';
import { AppService } from './app.service';
import { TitleModule } from './title/title.module';
import { TeamModule } from './team/team.module';
import { LeaveModule } from './leave/leave.module';
import { IosAppModule } from './ios_app/ios_app.module';
import { PayrollModule } from './payroll/payroll.module';
import { StatusupdateModule } from './statusupdate/statusupdate.module';
import { AttendanceModule } from './attendance/attendance.module';
import { NotificationModule } from './notification/notification.module';
import { DataModule } from './data/data.module';

Config();

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: config[process.env.NODE_ENV ?? 'development'],
      }),
    }),

    AuthModule,
    UserModule,
    DepartmentModule,
    TitleModule,
    TeamModule,
    LeaveModule,
    IosAppModule,
    PayrollModule,
    StatusupdateModule,
    AttendanceModule,
    NotificationModule,
    DataModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
