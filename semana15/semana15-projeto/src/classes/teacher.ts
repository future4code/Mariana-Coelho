import { User } from './user';

abstract class Teacher extends User {
    constructor(
        name: string,
        email: string,
        birthDate: string,
        public specialty: string[]
    )
    
    {
        super(name, email, birthDate)
    }
}