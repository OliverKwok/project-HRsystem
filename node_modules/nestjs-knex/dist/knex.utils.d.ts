import { KnexModuleOptions } from './knex.interfaces';
export declare function getKnexOptionsToken(connection: string): string;
export declare function getKnexConnectionToken(connection: string): string;
export declare function createKnexConnection(options: KnexModuleOptions): any;
