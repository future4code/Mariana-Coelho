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
const VideoDatabase_1 = __importDefault(require("../../../data/VideoDatabase"));
const GetAllVideosUC_1 = require("../../../business/usecases/video/GetAllVideosUC");
function getAllVideosEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = new VideoDatabase_1.default();
            const uc = new GetAllVideosUC_1.GetAllVideosUC(db);
            const data = yield uc.execute(Number(req.query.page));
            res.send({ data });
        }
        catch (err) {
            res.status(err.code || 400).send(err.message);
        }
    });
}
exports.default = getAllVideosEndpoint;
