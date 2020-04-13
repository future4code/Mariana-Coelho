import { Request, Response } from 'express';
import UserDB from '../../../data/UserDatabase';
import { LoginUC } from '../../../business/usecases/user/LoginUC';


export default async function LoginEndpoint(req: Request, res:Response){
    try{
        const db = new UserDB()
        const uc = new LoginUC(db)

        const data = await uc.execute({
            email: req.body.email,
            password: req.body.password
        })

        res.send({data})

    } catch(err) {
        res.status(err.code || 400).send(err.message)
    }
}