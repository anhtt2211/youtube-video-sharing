import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { VideoEntity } from '../entities/video.entity';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(VideoEntity)
    private videoRepository: Repository<VideoEntity>,
  ) {}

  async create(
    video: Partial<VideoEntity>,
    user: UserEntity | ITokenPayload,
  ): Promise<VideoEntity> {
    if (!this.isValidYouTubeUrl(video.url)) {
      throw new BadRequestException('Invalid YouTube URL');
    }

    const newVideo = this.videoRepository.create({ ...video, user });
    return this.videoRepository.save(newVideo);
  }

  findAll(): Promise<VideoEntity[]> {
    return this.videoRepository.find({ relations: ['user'] });
  }

  private isValidYouTubeUrl(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  }
}
