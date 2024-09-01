import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';

describe('UserController', () => {
  let userController: UserController;

  // Mock data for test user
  const mockUser: ITokenPayload = {
    id: '123',
    username: 'testuser',
    email: 'test@example.com',
  };

  // Setup the testing module
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true }) // Automatically bypass the JWT Auth Guard
      .compile();

    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  describe('getMe', () => {
    it('should return the user object', () => {
      expect(userController.getMe(mockUser)).toEqual(mockUser);
    });
  });
});
