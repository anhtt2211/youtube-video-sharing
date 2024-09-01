import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { Repository } from 'typeorm';
import { NotificationEntity } from '../entities/notification.entity';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>,
  ) {}

  async create(
    notification: Partial<NotificationEntity>,
  ): Promise<NotificationEntity> {
    const newNotification = this.notificationRepository.create(notification);
    return this.notificationRepository.save(newNotification);
  }

  async getNotifications(
    page: number,
    pageSize: number,
    user: ITokenPayload,
  ): Promise<NotificationEntity[]> {
    return this.notificationRepository.find({
      where: {
        recipient: {
          id: user.id,
        },
      },
      relations: ['sender', 'recipient'],
      order: { createdAt: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async markAsRead(id: string, user: ITokenPayload): Promise<boolean> {
    try {
      const notification = await this.notificationRepository.findOne({
        where: {
          id,
          recipient: {
            id: user.id,
          },
        },
      });

      if (!notification) {
        throw new Error('Notification not found');
      }

      await this.notificationRepository.save({ ...notification, read: true });
      return true;
    } catch (error) {
      return false;
    }
  }
}
