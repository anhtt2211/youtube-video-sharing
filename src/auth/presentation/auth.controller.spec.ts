import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../application/auth.service';
import { LoginRequestDto, RegisterRequestDto } from '../dto/auth.dto';
import { AuthController } from './auth.controller';

describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: {
            login: jest.fn(),
            register: jest.fn(),
          },
        },
      ],
    }).compile();

    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });

  describe('register', () => {
    it('should call AuthService.register and return the result', async () => {
      const registerDto: RegisterRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const result = { accessToken: 'token' };

      jest.spyOn(authService, 'register').mockResolvedValue(result);

      expect(await authController.register(registerDto)).toBe(result);
      expect(authService.register).toHaveBeenCalledWith(registerDto);
    });
  });

  describe('login', () => {
    it('should call AuthService.login and return the result', async () => {
      const loginDto: LoginRequestDto = {
        email: 'test@example.com',
        password: 'password',
      };
      const result = { accessToken: 'token' };

      jest.spyOn(authService, 'login').mockResolvedValue(result);

      expect(await authController.login(loginDto)).toBe(result);
      expect(authService.login).toHaveBeenCalledWith(loginDto);
    });
  });
});
