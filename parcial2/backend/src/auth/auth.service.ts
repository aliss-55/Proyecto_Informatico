import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(@InjectRepository(User) private userRepository:
        Repository<User>) { }

    async login(userObjectLogin: LoginDto): Promise<boolean> {
        const { email, password } = userObjectLogin;
        const findUser = await this.userRepository.findOne({where: {email}});

        if (!findUser) {
            return false;
        }

        const chechkPassword = await bcrypt.compare(password, findUser.password);
        if (!chechkPassword){
            return false;
        }

        return true;

    }
}
