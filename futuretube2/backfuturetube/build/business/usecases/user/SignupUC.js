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
const uuid_1 = require("uuid");
const User_1 = __importDefault(require("../../entities/User"));
class SignupUc {
    constructor(database) {
        this.database = database;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const userId = uuid_1.v4();
            const hashPassword = yield User_1.default.encryptPassword(input.password);
            yield this.database.signUp(new User_1.default(userId, input.name, input.email, hashPassword, input.birthdate, input.photo));
        });
    }
}
exports.SignupUc = SignupUc;
