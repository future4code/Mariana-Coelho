import express from "express";
import loginEndpoint from './endpoints/user/loginEndpoint' // mexi mas tá vazio 
import signUpEndpoint from './endpoints/user/signUpEndpoint' // mexi mas tá vazio 

const app = express();
app.use(express.json());

app.post('/signup', signUpEndpoint)
app.post('/login', loginEndpoint)

// RASCUNHO 
// app.get('/feed', getFeedEndpoint)
// app.post('/recipe/new', createRecipeEndpoint)

export default app;
