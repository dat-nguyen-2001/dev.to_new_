import { User } from 'src/typeorm/user.entity';
import { CreateUserDto } from 'src/users/users.dtos';
export declare class UsersService {
    getUsers(): Promise<User[]>;
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
