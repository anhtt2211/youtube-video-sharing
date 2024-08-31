import { Body, Controller, Get, Post } from '@nestjs/common';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { VideoService } from '../applications/video.service';
import { VideoEntity } from '../entities/video.entity';

@Controller('videos')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @Post()
  async shareVideo(
    @Body() videoData: Partial<VideoEntity>,
    @CurrentUser() user: ITokenPayload,
  ): Promise<VideoEntity> {
    return await this.videoService.create(videoData, user);
  }

  @Get()
  findAll(): Promise<VideoEntity[]> {
    return this.videoService.findAll();
  }
}
