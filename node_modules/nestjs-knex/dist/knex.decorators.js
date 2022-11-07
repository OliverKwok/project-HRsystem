"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectConnection = exports.InjectKnex = void 0;
const common_1 = require("@nestjs/common");
const knex_utils_1 = require("./knex.utils");
const InjectKnex = (connection) => {
    return common_1.Inject(knex_utils_1.getKnexConnectionToken(connection));
};
exports.InjectKnex = InjectKnex;
exports.InjectConnection = exports.InjectKnex;
