import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';
import { LoginDto } from './dto/login-auth.dto';
export declare class AuthService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    login(userObjectLogin: LoginDto): Promise<boolean>;
}
