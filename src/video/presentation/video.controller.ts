import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { VideoService } from '../applications/video.service';
import { VideoEntity } from '../entities/video.entity';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ListResponse } from 'src/shared/dtos/response.dto';

@Controller('videos')
@UseGuards(JwtAuthGuard)
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
  getFeeds(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 10,
  ): Promise<ListResponse<VideoEntity>> {
    return this.videoService.getFeeds(page, pageSize);
  }
}
