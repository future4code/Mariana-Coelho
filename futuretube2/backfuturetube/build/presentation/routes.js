"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uploadVideoEndpoint_1 = __importDefault(require("./endpoints/video/uploadVideoEndpoint"));
const SignUpEndpoint_1 = __importDefault(require("./endpoints/user/SignUpEndpoint"));
const LoginEndpoint_1 = __importDefault(require("./endpoints/user/LoginEndpoint"));
const getAllVideosEndpoint_1 = __importDefault(require("./endpoints/video/getAllVideosEndpoint"));
const express = require('express');
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
//Endpoints de usuário
app.post('/signup', SignUpEndpoint_1.default);
app.post('/login', LoginEndpoint_1.default);
//Endpoints de videos
app.post('/videos/upload', uploadVideoEndpoint_1.default);
app.get('/videos', getAllVideosEndpoint_1.default);
exports.default = app;
