import { Body, Controller, Get, Post } from '@nestjs/common';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { VideoEntity } from '../entities/video.entity';
import { VideoService } from '../applications/video.service';
import { VideoGateway } from '../applications/video.socket';

@Controller('videos')
export class VideoController {
  constructor(
    private readonly videoService: VideoService,
    private readonly videoGateway: VideoGateway,
  ) {}

  @Post()
  async shareVideo(
    @Body() videoData: Partial<VideoEntity>,
    @CurrentUser() user: ITokenPayload,
  ): Promise<VideoEntity> {
    const video = await this.videoService.create(videoData, user);
    this.videoGateway.notifyNewVideo(video);
    return video;
  }

  @Get()
  findAll(): Promise<VideoEntity[]> {
    return this.videoService.findAll();
  }
}
