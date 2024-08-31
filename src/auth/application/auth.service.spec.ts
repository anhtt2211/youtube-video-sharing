import { v4 as uuidv4 } from 'uuid';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/user/entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginRequestDto, RegisterRequestDto } from '../dto/auth.dto';

describe('AuthService', () => {
  let authService: AuthService;
  let userRepository: Repository<UserEntity>;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        {
          provide: getRepositoryToken(UserEntity),
          useClass: Repository,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    userRepository = module.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('login', () => {
    it('should return access token when login is successful', async () => {
      const loginDto: LoginRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const user = {
        id: uuidv4(),
        email: 'test@example.com',
        password: 'hashedpassword',
      };

      jest
        .spyOn(userRepository, 'findOne')
        .mockResolvedValue(user as UserEntity);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(true);
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      const result = await authService.login(loginDto);

      expect(result).toEqual({ accessToken: 'token' });
    });

    it('should throw an error if user is not found', async () => {
      const loginDto: LoginRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };

      jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);

      await expect(authService.login(loginDto)).rejects.toThrow(
        'User not found',
      );
    });

    it('should throw an error if password is invalid', async () => {
      const loginDto: LoginRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const user = {
        id: uuidv4(),
        email: 'test@example.com',
        password: 'hashedpassword',
      };

      jest
        .spyOn(userRepository, 'findOne')
        .mockResolvedValue(user as UserEntity);
      jest.spyOn(bcrypt, 'compare').mockResolvedValue(false);

      await expect(authService.login(loginDto)).rejects.toThrow(
        'Invalid password',
      );
    });
  });

  describe('register', () => {
    it('should register a new user and return access token', async () => {
      const registerDto: RegisterRequestDto = {
        email: 'test@example.com',
        username: 'test',
        password: 'password',
      };
      const user = { id: uuidv4(), ...registerDto };

      jest.spyOn(userRepository, 'findOne').mockResolvedValue(null);
      jest.spyOn(userRepository, 'save').mockResolvedValue(user as UserEntity);
      jest.spyOn(jwtService, 'sign').mockReturnValue('token');

      const result = await authService.register(registerDto);

      expect(result).toEqual({ accessToken: 'token' });
    });

    it('should throw an error if user already exists', async () => {
      const registerDto: RegisterRequestDto = {
        email: 'test@example.com',
        username: 'test',
        password: 'password',
      };
      const user = { id: uuidv4(), ...registerDto };

      jest
        .spyOn(userRepository, 'findOne')
        .mockResolvedValue(user as UserEntity);

      await expect(authService.register(registerDto)).rejects.toThrow(
        'User already exists',
      );
    });
  });
});
