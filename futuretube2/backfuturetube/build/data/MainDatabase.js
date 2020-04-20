"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex = require('knex');
class MainDB {
    constructor() {
        this.connection = knex({
            client: 'mysql',
            connection: {
                host: process.env.DB_HOST,
                user: process.env.DB_USER,
                password: process.env.DB_PASSWORD,
                database: process.env.DB_NAME
            }
        });
    }
}
exports.default = MainDB;
