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
class VideoDB extends MainDatabase_1.default {
    uploadVideo(video) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connection.raw(`INSERT into videos values('${video.getId()}','1','${video.getUrl()}','${video.getTitle()}','${video.getDescription()}')`);
            }
            catch (err) {
                throw new Error(err.sqlMessage);
            }
        });
    }
    getAllVideos(page = 0) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const offset = (page - 1) * 10;
                const result = yield this.connection.raw(`
            SELECT id, title, url from videos
            LIMIT 10
            OFFSET ${offset}
            ;
        `);
                return result[0];
            }
            catch (err) {
                throw new Error(err.sqlMessage);
            }
        });
    }
}
exports.default = VideoDB;
