import User from "../../business/entities/User";

export default interface UserGateway {
    signUp(user: User): void
}
