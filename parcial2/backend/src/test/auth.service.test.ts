import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthService } from '../auth/auth.service';
import { User } from '../users/user.entity';
import { LoginDto } from '../auth/dto/login-auth.dto';
import * as bcrypt from 'bcrypt';

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('login', () => {
    it('should return true if the user exists and the password is correct', async () => {
      // Arrange
      const email = 'test@example.com';
      const password = 'password123';
      const userObjectLogin: LoginDto = { email, password };
      const findUser = new User();
      findUser.email = email;
      findUser.password = await bcrypt.hash(password, 10);
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(findUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);

      // Act
      const result = await authService.login(userObjectLogin);

      // Assert
      expect(result).toBe(true);
      expect(userRepository.findOne).toHaveBeenCalledWith({ where: { email } });
      expect(bcrypt.compare).toHaveBeenCalledWith(password, findUser.password);
    });

    it('should return false if the user does not exist', async () => {
      // Arrange
      const email = 'test@example.com';
      const password = 'password123';
      const userObjectLogin: LoginDto = { email, password };
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(undefined);

      // Act
      const result = await authService.login(userObjectLogin);

      // Assert
      expect(result).toBe(false);
      expect(userRepository.findOne).toHaveBeenCalledWith({ where: { email } });
    });

    it('should return false if the password is incorrect', async () => {
      // Arrange
      const email = 'test@example.com';
      const password = 'password123';
      const userObjectLogin: LoginDto = { email, password };
      const findUser = new User();
      findUser.email = email;
      findUser.password = await bcrypt.hash('wrongpassword', 10);
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(findUser);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

      // Act
      const result = await authService.login(userObjectLogin);

      // Assert
      expect(result).toBe(false);
      expect(userRepository.findOne).toHaveBeenCalledWith({ where: { email } });
      expect(bcrypt.compare).toHaveBeenCalledWith(password, findUser.password);
    });
  });
});