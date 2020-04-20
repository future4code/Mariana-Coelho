"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainDatabase_1 = __importDefault(require("./MainDatabase"));
class UserDB extends MainDatabase_1.default {
    signUp(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.raw(`INSERT into users values(
                '${user.getId()}',
                '${user.getName()}',
                '${user.getEmail()}',
                '${user.getbirthDate()}',
                '${user.getPhoto()}',
                '${user.getPassword()}'   
                )`);
            }
            catch (err) {
                throw new Error(err.sqlMessage);
            }
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.connection.raw(`
            SELECT * from users 
            WHERE email = "${email}"
        `);
            return result[0][0];
        });
    }
    login() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
}
exports.default = UserDB;
