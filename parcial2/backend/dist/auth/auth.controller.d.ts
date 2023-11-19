import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(userObjectLogin: LoginDto): Promise<boolean>;
}
