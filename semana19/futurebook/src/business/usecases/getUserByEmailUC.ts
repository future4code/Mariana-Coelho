import userDatabase from "../../data/userDatabase";
import User from "../entities/User";
import {v4} from "uuid"; 
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

interface LoginInput {
    email: string
    password: string
}

export default class CreateUserUC {
    constructor(
        private database: userDatabase
    ) { }

    async execute(input: LoginInput) {
        const user = await this.database.getUserByEmail(input.email)
        const isPasswordCorrect = await bcrypt.compare(input.password, user.password)

        if(isPasswordCorrect){
            const jwtkey = process.env.JWT_KEY as string
            const token = jwt.sign({id: user.id}, jwtkey, {expiresIn: '1h'})

            return {
                message: "Usuário logado!",
                token
            }
        } else {
            throw new Error('Usuário ou senha incorreta.')
        }
    }
}