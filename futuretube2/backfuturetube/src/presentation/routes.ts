import uploadVideoEndpoint from "./endpoints/video/uploadVideoEndpoint";
import SignupEndpoint from "./endpoints/user/SignUpEndpoint";
import LoginEndpoint from "./endpoints/user/LoginEndpoint";
import getAllVideosEndpoint from "./endpoints/video/getAllVideosEndpoint";
const express = require('express');

const app = express();
const cors = require("cors")

app.use(express.json())
app.use(cors())

//Endpoints de usuário
app.post('/signup', SignupEndpoint)
app.post('/login', LoginEndpoint)

//Endpoints de videos
app.post('/videos/upload', uploadVideoEndpoint)
app.get('/videos', getAllVideosEndpoint)

export default app;
