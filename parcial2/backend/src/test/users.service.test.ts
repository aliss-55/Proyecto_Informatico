import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

describe('UsersService', () => {
  let usersService: UsersService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('getUsers', () => {
    it('should return an array of users', async () => {
      // Arrange
      const users = [new User(), new User()];
      jest.spyOn(userRepository, 'find').mockResolvedValue(users);

      // Act
      const result = await usersService.getUsers();

      // Assert
      expect(result).toEqual(users);
      expect(userRepository.find).toHaveBeenCalled();
    });
  });

  describe('getUser', () => {
    it('should return a user by email', async () => {
      // Arrange
      const email = 'test@example.com';
      const user = new User();
      jest.spyOn(userRepository, 'findOne').mockResolvedValue(user);

      // Act
      const result = await usersService.getUser(email);

      // Assert
      expect(result).toEqual(user);
      expect(userRepository.findOne).toHaveBeenCalledWith({ where: { email } });
    });
  });
});