import express from 'express'
import createUserEndpoint from './endpoints/createUserEndpoint'
import loginEndpoint from './endpoints/loginEndpoint'

const app = express()
app.use(express.json())

app.post("/user/create", createUserEndpoint)
app.get("/user/login", loginEndpoint)

export default app

// parametros: caminho e função do endpoint