import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationEntity } from '../entities/notification.entity';
import { NotificationService } from './notification.service';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';

describe('NotificationService', () => {
  let service: NotificationService;
  let mockNotificationRepository: jest.Mocked<Repository<NotificationEntity>>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NotificationService,
        {
          provide: getRepositoryToken(NotificationEntity),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
            find: jest.fn(),
            findOne: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<NotificationService>(NotificationService);
    mockNotificationRepository = module.get(
      getRepositoryToken(NotificationEntity),
    );
  });

  describe('create', () => {
    it('should successfully create a notification', async () => {
      const mockNotification = { id: '1', message: 'Test Notification' };

      // Type assertion here
      (mockNotificationRepository.create as jest.Mock).mockReturnValue(
        mockNotification,
      );
      (mockNotificationRepository.save as jest.Mock).mockResolvedValue(
        mockNotification,
      );

      const result = await service.create(mockNotification);

      expect(result).toEqual(mockNotification);
      expect(mockNotificationRepository.create).toHaveBeenCalledWith(
        mockNotification,
      );
      expect(mockNotificationRepository.save).toHaveBeenCalledWith(
        mockNotification,
      );
    });
  });

  describe('getNotifications', () => {
    it('should return notifications array', async () => {
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
      mockNotificationRepository.find.mockResolvedValue(mockNotifications);

      const result = await service.getNotifications(1, 10, recipient);

      expect(result).toEqual(mockNotifications);
      expect(mockNotificationRepository.find).toHaveBeenCalled();
    });
  });

  describe('markAsRead', () => {
    it('should return true when notification is marked as read', async () => {
      const recipient: ITokenPayload = {
        id: 'user1',
        username: 'user1',
        email: 'user1@gmail.com',
      };
      const sender: ITokenPayload = {
        id: 'user2',
        username: 'user2',
        email: 'user2@gmail.com',
      };
      const notification = {
        id: '1',
        recipient: { id: recipient.id },
        sender: { id: sender.id },
        message: 'Hello',
      } as NotificationEntity;

      mockNotificationRepository.findOne.mockResolvedValue(notification);
      mockNotificationRepository.save.mockResolvedValue({
        ...notification,
        read: true,
      });

      const result = await service.markAsRead('1', recipient);

      expect(result).toBeTruthy();
      expect(mockNotificationRepository.save).toHaveBeenCalledWith({
        ...notification,
        read: true,
      });
    });

    it('should fail to find the notification and return false', async () => {
      const recipient: ITokenPayload = {
        id: 'user1',
        username: 'user1',
        email: 'user1@gmail.com',
      };
      mockNotificationRepository.findOne.mockResolvedValue(null);

      const result = await service.markAsRead('invalidId', recipient);

      expect(result).toBeFalsy();
      expect(mockNotificationRepository.findOne).toHaveBeenCalled();
    });
  });
});
