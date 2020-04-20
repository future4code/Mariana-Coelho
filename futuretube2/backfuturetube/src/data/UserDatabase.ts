import MainDB from "./MainDatabase";
import User from "../business/entities/User";
import UserGateway from "../business/gateways/UserGateway";

export default class UserDB extends MainDB implements UserGateway {
    async signUp(user: User){
        try{
            await this.connection.raw(`INSERT into users values(
                '${user.getId()}',
                '${user.getName()}',
                '${user.getEmail()}',
                '${user.getbirthDate()}',
                '${user.getPhoto()}',
                '${user.getPassword()}'   
                )`)

        } catch(err) {
            throw new Error(err.sqlMessage)
        }
    }
    
    async getUserByEmail(email: string){
        const result = await this.connection.raw(`
            SELECT * from users 
            WHERE email = "${email}"
        `)
        return result[0][0]
    }

    async login(){}

}
