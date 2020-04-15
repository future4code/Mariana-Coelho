import { v4 } from 'uuid';
import User from '../../entities/User';
import UserDB from '../../../data/UserDatabase';

interface SignUpInput {
    name: string,
    email: string,
    password: string,
    birthdate: string,
    photo: string
}

export class SignupUc {
    constructor(private database: UserDB) {}

    async execute(input: SignUpInput){
        const userId = v4()
        const hashPassword = await User.encryptPassword(input.password)
        await this.database.signUp(new User(userId, input.name, input.email, hashPassword, input.birthdate, input.photo))
    }
}