// import loginEndpoint from './endpoints/user/loginEndpoint' // mexi mas tá vazio 
// import signUpEndpoint from './endpoints/user/signUpEndpoint' // mexi mas tá vazio 
import uploadVideoEndpoint from "./endpoints/video/uploadVideoEndpoint";
import SignupEndpoint from "./endpoints/user/SignUpEndpoint";
const express = require('express');

const app = express();
const cors = require("cors")

app.use(express.json());

app.post('/signup', SignupEndpoint)
// app.post('/login', loginEndpoint)

app.post('/videos/upload', uploadVideoEndpoint)

// RASCUNHO 
// app.get('/feed', getFeedEndpoint)
// app.post('/recipe/new', createRecipeEndpoint)

export default app;
