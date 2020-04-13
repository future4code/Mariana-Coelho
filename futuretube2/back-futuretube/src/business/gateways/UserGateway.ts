import User from "../../business/entities/User";

export default interface UserGateway {
    SignUp(user: User): void
}
