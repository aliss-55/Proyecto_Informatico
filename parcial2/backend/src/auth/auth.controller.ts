import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async loginUser(@Body() userObjectLogin: LoginDto) {
        const isAuthenticated = await this.authService.login(userObjectLogin);

        if (isAuthenticated) {
            // Autenticación exitosa: redirigir o realizar alguna acción
            console.log('Autenticación exitosa');
        } else {
            // Autenticación fallida: redirigir o realizar otra acción
            return isAuthenticated;
        }

    }
}
