import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LeaveModule } from './leave/leave.module';
import { KnexModule } from 'nestjs-knex';
import * as config from '../knexfile';
import { config as Config } from 'dotenv';
import { DepartmentModule } from './department/department.module';
Config();

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: config[process.env.NODE_ENV ?? 'development'],
      }),
    }),

    AuthModule,
    LeaveModule,
    UserModule,
    DepartmentModule,

  ],
})
export class AppModule {}
