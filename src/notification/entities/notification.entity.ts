import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

@Entity('notifications')
export class NotificationEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  message: string;

  @Column({ nullable: true })
  url?: string; // Optional URL for additional context or redirection

  @ManyToOne(() => UserEntity, (user) => user.receivedNotifications)
  recipient: UserEntity;

  @ManyToOne(() => UserEntity, (user) => user.sentNotifications, {
    nullable: true,
  })
  sender: UserEntity;

  @Column({ default: false })
  read: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
