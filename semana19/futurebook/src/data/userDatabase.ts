import MainDB from "./MainDatabase";
import user from "../business/entities/User";

export default class UserDB extends MainDB {

    async createUser (user: user) {
        await this.connection.raw(
            `INSERT INTO FB_USERS VALUES (
                "${user.getId()}",
                "${user.getName()}",
                "${user.getEmail()}",
                "${user.getPassword()}"
            )`
        )
    }

    async getUserByEmail (email: string) {
        const result = await this.connection.raw(`
            SELECT * FROM FB_USERS
        `)
        return (result[0][0])
    }

}

