import { Injectable } from '@nestjs/common';
import { User } from 'src/typeorm/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/dtos/auth-credentials.dto';
@Injectable()
export class UsersService {
  async getUsers() : Promise<User[]> {
    return await User.find();
  }

  async createUser(createUserDto: AuthCredentialsDto): Promise<User> {
    const {username, email, password} = createUserDto;
    const newUser = new User();
    newUser.username = username;
    newUser.email = email;
    newUser.password = await bcrypt.hash(password, 10);
    newUser.reading_list = [];
    newUser.articles = [];
    newUser.comments = []
    return await newUser.save();
  }
}


