import MainDB from "./MainDatabase";
import User from "../business/entities/User";
import UserGateway from "../business/gateways/UserGateway";

export default class UserDB extends MainDB implements UserGateway {
    async SignUp(user: User){
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
}
