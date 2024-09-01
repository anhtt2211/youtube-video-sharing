import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { VideoEntity } from '../entities/video.entity';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { VideoGateway } from './video.socket';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';
import { ListResponse } from 'src/shared/dtos/response.dto';

@Injectable()
export class VideoService {
  constructor(
    @InjectRepository(VideoEntity)
    private videoRepository: Repository<VideoEntity>,
    private readonly videoGateway: VideoGateway,
    private readonly configService: ConfigService,
  ) {}

  async create(
    video: Partial<VideoEntity>,
    user: UserEntity | ITokenPayload,
  ): Promise<VideoEntity> {
    if (!this.isValidYouTubeUrl(video.url)) {
      throw new BadRequestException('Invalid YouTube URL');
    }

    const videoId = this.extractVideoId(video.url);
    if (!videoId) {
      throw new BadRequestException('Unable to extract video ID from URL');
    }
    const isVideoIdUnique = await this.isVideoIdUnique(videoId);
    if (!isVideoIdUnique) {
      throw new BadRequestException('Video already exists');
    }

    const metadata = await this.fetchYouTubeMetadata(videoId);
    if (!metadata) {
      throw new BadRequestException('Unable to fetch video metadata');
    }

    const videoCreated = await this.videoRepository.save({
      user,
      videoId,
      url: video.url,
      ...metadata,
    });
    this.videoGateway.notifyNewVideo(videoCreated);

    return videoCreated;
  }

  async getFeeds(
    page: number,
    pageSize: number,
  ): Promise<ListResponse<VideoEntity>> {
    const [items, count] = await this.videoRepository.findAndCount({
      relations: ['user'],
      order: { updatedAt: 'DESC' },
      skip: (page - 1) * pageSize,
      take: pageSize,
    });

    return new ListResponse(items, count, page, pageSize);
  }

  private isValidYouTubeUrl(url: string): boolean {
    const regex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  }

  private async fetchYouTubeMetadata(videoId: string) {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos`,
        {
          params: {
            part: 'snippet',
            id: videoId,
            key: this.configService.get<string>('YOUTUBE_API_KEY'),
          },
        },
      );

      const videoData = response.data.items[0].snippet;
      return {
        title: videoData.title,
        thumbnailUrl: videoData.thumbnails.default.url,
        description: videoData.description,
      };
    } catch (error) {
      console.error('Error fetching YouTube metadata:', error);
      return null;
    }
  }

  private extractVideoId(url: string): string | null {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  }

  private async isVideoIdUnique(videoId: string): Promise<boolean> {
    const video = await this.videoRepository.findOne({ where: { videoId } });
    return !video;
  }
}
