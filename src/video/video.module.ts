import { Module } from '@nestjs/common';
import { VideoService } from './applications/video.service';
import { VideoGateway } from './applications/video.socket';
import { VideoController } from './presentation/video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { VideoEntity } from './entities/video.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, VideoEntity])],
  controllers: [VideoController],
  providers: [VideoService, VideoGateway],
})
export class VideoModule {}
