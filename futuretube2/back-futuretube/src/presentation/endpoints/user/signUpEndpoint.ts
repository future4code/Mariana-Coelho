import { Request, Response } from 'express';
import UserDB from '../../../data/UserDatabase';
import { SignupUc } from '../../../business/usecases/user/SignupUC';

export default async function SignupEndpoint(req: Request, res:Response){
    try{
        const db = new UserDB()
        const uc = new SignupUc(db)

        await uc.execute({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            birthdate: req.body.birthdate,
            photo: req.body.photo
        })

        res.status(200).send("Usuário criado.")

    }catch(err) {
        res.status(err.code || 400).send(err.message)
    }
}