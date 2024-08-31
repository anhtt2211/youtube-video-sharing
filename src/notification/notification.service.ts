import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { NotificationEntity } from './entities/notification.entity';

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
}
