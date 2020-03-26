import { Request, Response } from 'express'
import UserDB from '../../data/userDatabase'
import CreateUserUC from '../../business/usecases/createUserUC'

export default async function createUserEndpoint(req: Request, res: Response) {
    const useCase = new CreateUserUC(new UserDB())
    try {
        const result = await useCase.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })

        res.send("Usuário criado")
    } catch (err) {
        res.send(err.message)
    }

}

//execute = chama o UseCase