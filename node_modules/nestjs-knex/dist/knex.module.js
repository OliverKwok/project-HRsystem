"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KnexModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexModule = void 0;
const common_1 = require("@nestjs/common");
const knex_core_module_1 = require("./knex.core-module");
let KnexModule = KnexModule_1 = class KnexModule {
    static forRoot(options, connection) {
        return {
            module: KnexModule_1,
            imports: [knex_core_module_1.KnexCoreModule.forRoot(options, connection)],
            exports: [knex_core_module_1.KnexCoreModule],
        };
    }
    static forRootAsync(options, connection) {
        return {
            module: KnexModule_1,
            imports: [knex_core_module_1.KnexCoreModule.forRootAsync(options, connection)],
            exports: [knex_core_module_1.KnexCoreModule],
        };
    }
};
KnexModule = KnexModule_1 = __decorate([
    common_1.Module({})
], KnexModule);
exports.KnexModule = KnexModule;
