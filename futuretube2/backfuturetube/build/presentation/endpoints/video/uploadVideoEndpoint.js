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
const UploadVideoUC_1 = __importDefault(require("../../../business/usecases/video/UploadVideoUC"));
function uploadVideoEndpoint(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const db = new VideoDatabase_1.default();
            const uc = new UploadVideoUC_1.default(db);
            yield uc.execute({
                token: req.headers.auth,
                title: req.body.title,
                description: req.body.description,
                url: req.body.url
            });
            res.status(200).send("Vídeo criado.");
        }
        catch (err) {
            res.status(err.code || 400).send(err.message);
        }
    });
}
exports.default = uploadVideoEndpoint;
