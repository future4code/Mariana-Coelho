import { Request, Response } from 'express'
import UserDB from '../../data/userDatabase'
import LoginUC from '../../business/usecases/getUserByEmailUC'

export default async function loginEndpoint (req: Request, res: Response) {
    const useCase = new LoginUC(new UserDB())
    try {
        const data = await useCase.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send({data})

    } catch (err) {
        res.send(err.message)
    }

}

//execute = chama o UseCase