import { Module } from '@nestjs/common';
import { VideoService } from './applications/video.service';
import { VideoGateway } from './applications/video.socket';
import { VideoController } from './presentation/video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoEntity } from './entities/video.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, VideoEntity]),
    UserModule,
    NotificationModule,
  ],
  controllers: [VideoController],
  providers: [VideoService, VideoGateway],
})
export class VideoModule {}
