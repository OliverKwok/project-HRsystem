import { DynamicModule, Provider } from '@nestjs/common';
import { KnexModuleAsyncOptions, KnexModuleOptions } from './knex.interfaces';
export declare class KnexCoreModule {
    static forRoot(options: KnexModuleOptions, connection?: string): DynamicModule;
    static forRootAsync(options: KnexModuleAsyncOptions, connection: string): DynamicModule;
    static createAsyncProviders(options: KnexModuleAsyncOptions, connection?: string): Provider[];
    static createAsyncOptionsProvider(options: KnexModuleAsyncOptions, connection?: string): Provider;
}
