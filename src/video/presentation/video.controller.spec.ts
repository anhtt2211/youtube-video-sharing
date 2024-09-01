import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './video.controller';
import { VideoService } from '../applications/video.service';
import { VideoEntity } from '../entities/video.entity';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { ListResponse } from 'src/shared/dtos/response.dto';

jest.mock('../applications/video.service');

describe('VideoController', () => {
  let videoController: VideoController;
  let videoService: VideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VideoController],
      providers: [
        {
          provide: VideoService,
          useClass: jest.fn(() => ({
            create: jest.fn(),
            getFeeds: jest.fn(),
          })),
        },
      ],
    }).compile();

    videoController = module.get<VideoController>(VideoController);
    videoService = module.get<VideoService>(VideoService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('shareVideo', () => {
    it('should call VideoService.create and return the created video', async () => {
      const videoData: Partial<VideoEntity> = {
        url: 'https://www.youtube.com/watch?v=test',
        title: 'Test Video',
      };
      const user: ITokenPayload = {
        id: 'user-id',
        email: 'test@example.com',
        username: 'test',
      };
      const createdVideo = {
        ...videoData,
        id: 'video-id',
        user,
      } as VideoEntity;

      jest.spyOn(videoService, 'create').mockResolvedValue(createdVideo);

      const result = await videoController.shareVideo(videoData, user);

      expect(videoService.create).toHaveBeenCalledWith(videoData, user);
      expect(result).toEqual(createdVideo);
    });
  });

  describe('getFeeds', () => {
    it('should call VideoService.getFeeds and return all videos', async () => {
      const videos: VideoEntity[] = [
        {
          id: '1',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Video 1',
          user: {} as any,
        } as VideoEntity,
        {
          id: '2',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Video 2',
          user: {} as any,
        } as VideoEntity,
      ];

      const listResponse = new ListResponse(videos, videos.length, 1, 10);

      jest.spyOn(videoService, 'getFeeds').mockResolvedValue(listResponse);

      const result = await videoController.getFeeds();

      expect(videoService.getFeeds).toHaveBeenCalled();
      expect(result).toEqual(listResponse);
    });
  });
});
