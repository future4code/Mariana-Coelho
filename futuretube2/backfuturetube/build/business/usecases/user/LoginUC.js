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
const User_1 = __importDefault(require("../../entities/User"));
class LoginUC {
    constructor(database) {
        this.database = database;
    }
    execute(input) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.database.getUserByEmail(input.email);
            const token = User_1.default.generateToken(user.id);
            const isPasswordCorrect = User_1.default.checkPassword(input.password, user.Password);
            if (!user)
                throw new Error("Dados incorretos.");
            if (!isPasswordCorrect)
                throw new Error("Dados incorretos.");
            return { token };
        });
    }
}
exports.LoginUC = LoginUC;
