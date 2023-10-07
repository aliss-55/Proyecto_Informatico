import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async loginUser(@Body() userObjectLogin: LoginDto) {
        console.log(userObjectLogin);
        const data = await this.authService.login(userObjectLogin);
        //return this.authService.login(userObjectLogin);

    }
}
