import { DynamicModule } from '@nestjs/common';
import { KnexModuleAsyncOptions, KnexModuleOptions } from './knex.interfaces';
export declare class KnexModule {
    static forRoot(options: KnexModuleOptions, connection?: string): DynamicModule;
    static forRootAsync(options: KnexModuleAsyncOptions, connection?: string): DynamicModule;
}
