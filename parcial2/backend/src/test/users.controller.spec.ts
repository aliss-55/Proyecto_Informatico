import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from '../users/users.controller';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

describe('UsersController', () => {
  let controller: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    usersService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('getUsers', () => {
    it('should return the result of usersService.getUsers', async () => {
      const users: User[] = [{
        id: 1,
        user: 'John Doe',
        email: 'johndoe@example.com',
        password: '123456',
      },
      {
        id: 2,
        user: 'Jane Doe',
        email: 'janedoe@example.com',
        password: '123456',
      },];
      jest.spyOn(usersService, 'getUsers').mockResolvedValue(users);

      const result = await controller.getUsers();

      expect(result).toBe(users);
    });
  });

  describe('getUser', () => {
    it('should call usersService.getUsers with the provided email', async () => {
      const email = 'test@example.com';
      const getUserSpy = jest.spyOn(usersService, 'getUsers').mockResolvedValue([]);

      await controller.getUser(email);

      expect(getUserSpy).toHaveBeenCalledWith(email);
    });
  });
});
