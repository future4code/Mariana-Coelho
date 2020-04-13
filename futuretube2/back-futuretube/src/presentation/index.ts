// import loginEndpoint from './endpoints/user/loginEndpoint' // mexi mas tá vazio 
// import signUpEndpoint from './endpoints/user/signUpEndpoint' // mexi mas tá vazio 
import uploadVideoEndpoint from "./endpoints/video/uploadVideoEndpoint";
import SignupEndpoint from "./endpoints/user/SignUpEndpoint";
import LoginEndpoint from "./endpoints/user/loginEndpoint";
const express = require('express');

const app = express();
const cors = require("cors")

app.use(express.json());

//Usuário
app.post('/signup', SignupEndpoint)
app.post('/login', LoginEndpoint
)

//Videos
app.post('/videos/upload', uploadVideoEndpoint)

export default app;
