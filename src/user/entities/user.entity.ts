import * as bcrypt from 'bcrypt';
import { NotificationEntity } from 'src/notification/entities/notification.entity';
import { VideoEntity } from 'src/video/entities/video.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => VideoEntity, (video) => video.user)
  videos: VideoEntity[];

  @OneToMany(() => NotificationEntity, (notification) => notification.recipient)
  receivedNotifications: NotificationEntity[];

  @OneToMany(() => NotificationEntity, (notification) => notification.sender)
  sentNotifications: NotificationEntity[];
}
