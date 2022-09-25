import { User } from 'src/typeorm/user.entity';
import { AuthCredentialsDto } from 'src/dtos/auth-credentials.dto';
import { JwtService } from "@nestjs/jwt";
export declare class UsersService {
    private jwtService;
    constructor(jwtService: JwtService);
    private hashPassword;
    getUsers(): Promise<User[]>;
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentailDto: AuthCredentialsDto): Promise<{
        accessToken: string;
    }>;
}
