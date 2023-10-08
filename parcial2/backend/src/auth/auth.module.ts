import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginDto } from './dto/login-auth.dto';

@Module({
  imports: [TypeOrmModule.forFeature([LoginDto]),
  UsersModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
