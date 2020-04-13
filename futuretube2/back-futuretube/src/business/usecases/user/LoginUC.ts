import User from '../../entities/User';
import UserDB from '../../../data/UserDatabase';

interface LoginUCInput {
    email: string,
    password: string,
}

export class LoginUC {
    constructor(private database: UserDB) {}

    async execute(input: LoginUCInput){
        const user = await this.database.getUserByEmail(input.email)
        const token = User.generateToken(user.id)
        const isPasswordCorrect = User.checkPassword(input.password, user.Password)

        if (!user) throw new Error("Dados incorretos.")
        if (!isPasswordCorrect) throw new Error ("Dados incorretos.")

        return {token}
    }
}