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
const UserDatabase_1 = __importDefault(require("../../../data/UserDatabase"));
const SignupUC_1 = require("../../../business/usecases/user/SignupUC");
function SignupEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = new UserDatabase_1.default();
            const uc = new SignupUC_1.SignupUc(db);
            yield uc.execute({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                birthdate: req.body.birthdate,
                photo: req.body.photo
            });
            res.status(200).send("Usuário criado.");
        }
        catch (err) {
            res.status(err.code || 400).send(err.message);
        }
    });
}
exports.default = SignupEndpoint;
