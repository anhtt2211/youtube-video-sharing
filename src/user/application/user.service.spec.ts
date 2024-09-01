import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';
import { Repository } from 'typeorm';

describe('UserService', () => {
  let service: UserService;
  let mockUserRepository: Partial<Repository<UserEntity>>;

  beforeEach(async () => {
    // Create a mock repository
    mockUserRepository = {
      find: jest
        .fn()
        .mockResolvedValue([
          { id: '1', username: 'John Doe', email: 'john@example.com' },
        ]),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(UserEntity),
          useValue: mockUserRepository,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a list of users', async () => {
    const users = await service.getUsers();
    expect(users).toHaveLength(1);
    expect(users[0].username).toEqual('John Doe');
    expect(mockUserRepository.find).toHaveBeenCalled();
  });
});
