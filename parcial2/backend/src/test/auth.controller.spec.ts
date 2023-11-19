import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from '../auth/auth.controller';
import { AuthService } from '../auth/auth.service';
import { LoginDto } from '../auth/dto/login-auth.dto';
import { UnauthorizedException } from '@nestjs/common/exceptions/unauthorized.exception';

describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('loginUser', () => {
    it('should return true if authentication is successful', async () => {
      const loginDto: LoginDto = {
          email: '',
          password: ''
      };
      jest.spyOn(authService, 'login').mockResolvedValue(true);

      const result = await controller.loginUser(loginDto);

      expect(result).toBe(true);
    });
  });
});
describe('AuthController', () => {
  let controller: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('loginUser', () => {
    it('should return true if authentication is successful', async () => {
      const loginDto: LoginDto = {
          email: '',
          password: ''
      };
      jest.spyOn(authService, 'login').mockResolvedValue(true);

      const result = await controller.loginUser(loginDto);

      expect(result).toBe(true);
    });

    it('should throw an exception if authentication fails', async () => {
      const loginDto: LoginDto = {
          email: '',
          password: ''
      };
      jest.spyOn(authService, 'login').mockResolvedValue(false);

      await expect(controller.loginUser(loginDto)).rejects.toThrow(UnauthorizedException);
    });
  });
});