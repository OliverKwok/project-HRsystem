import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { LeaveModule } from './leave/leave.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import entities from './typeorm';
import { KnexModule } from 'nestjs-knex';
import * as config from '../knexfile';
import dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    KnexModule.forRootAsync({
      useFactory: () => ({
        config: config[process.env.NODE_ENV ?? 'development'],
      }),
    }),

    // KnexModule.forRoot({
    //   config: {
    //     client: 'postgresql',
    //     connection: {
    //       database: process.env.DB_NAME,
    //       user: process.env.DB_USER,
    //       password: process.env.DB_PASSWORD,
    //       host: process.env.DB_HOST,
    //     },
    //     pool: {
    //       min: 2,
    //       max: 10,
    //     },
    //     migrations: {
    //       tableName: 'knex_migrations',
    //     },
    //   },
    // }),

    AuthModule,
    UserModule,
    LeaveModule,

    // ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRootAsync({
    //   imports: [ConfigModule],
    //   useFactory: (configService: ConfigService) => ({
    //     type: 'postgres',
    //     host: configService.get('DB_HOST'),
    //     port: +configService.get<number>('DB_PORT'),
    //     username: configService.get('DB_USERNAME'),
    //     password: configService.get('DB_PASSWORD'),
    //     database: configService.get('DB_NAME'),
    //     entities: entities,
    //     synchronize: true,
    //   }),
    //   inject: [ConfigService],
    // }),
    // AuthModule,
    // UserModule,
    // LeaveModule,
  ],
})
export class AppModule {}
