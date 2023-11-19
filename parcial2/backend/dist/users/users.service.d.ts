import { User } from './user.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    getUsers(): Promise<User[]>;
    getUser(email: string): Promise<User>;
}
