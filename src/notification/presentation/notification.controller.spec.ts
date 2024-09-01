import { Test, TestingModule } from '@nestjs/testing';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { NotificationService } from '../application/notification.service';
import { NotificationEntity } from '../entities/notification.entity';
import { NotificationController } from './notification.controller';

describe('NotificationController', () => {
  let controller: NotificationController;
  let mockNotificationService: jest.Mocked<NotificationService>;

  beforeEach(async () => {
    mockNotificationService = {
      create: jest.fn(),
      getNotifications: jest.fn(),
      markAsRead: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationController],
      providers: [
        {
          provide: NotificationService,
          useValue: mockNotificationService,
        },
      ],
    })
      .overrideGuard(JwtAuthGuard)
      .useValue({ canActivate: () => true })
      .compile();

    controller = module.get<NotificationController>(NotificationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return notifications', async () => {
      const recipient: ITokenPayload = {
        id: 'user1',
        username: 'user1',
        email: 'user1@gmail.com',
      };
      const sender = { id: 'user2' };
      const mockNotifications: NotificationEntity[] = [
        {
          id: '1',
          recipient: { id: recipient.id },
          sender: { id: sender.id },
          message: 'Hello',
        } as NotificationEntity,
      ];

      mockNotificationService.getNotifications.mockResolvedValue(
        mockNotifications,
      );

      const result = await controller.findAll(1, 5, recipient);

      expect(result).toEqual(mockNotifications);
      expect(mockNotificationService.getNotifications).toHaveBeenCalledWith(
        1,
        5,
        recipient,
      );
    });
  });

  describe('markAsRead', () => {
    it('should mark a notification as read', async () => {
      const recipient: ITokenPayload = {
        id: 'user1',
        username: 'user1',
        email: 'user1@gmail.com',
      };
      const notificationId = '123';
      mockNotificationService.markAsRead.mockResolvedValue(true);

      const result = await controller.markAsRead(notificationId, recipient);

      expect(result).toBe(true);
      expect(mockNotificationService.markAsRead).toHaveBeenCalledWith(
        notificationId,
        recipient,
      );
    });
  });
});
