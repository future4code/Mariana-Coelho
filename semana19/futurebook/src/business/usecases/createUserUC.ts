import userDatabase from "../../data/userDatabase";
import User from "../entities/User";
import {v4} from "uuid"; 
import * as bcrypt from 'bcrypt';

interface CreateInput {
    name: string,
    email: string
    password: string
}

export default class CreateUserUC {
    constructor(
        private database: userDatabase
    ) { }

    async execute(input: CreateInput) {
        const id = v4()
        const rounds = 10
        const hash = await bcrypt.hash(input.password, rounds)
        await this.database.createUser(new User(id, input.name, input.email, hash))
    }
}