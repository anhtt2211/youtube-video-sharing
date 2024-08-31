import { Test, TestingModule } from '@nestjs/testing';
import { VideoController } from './video.controller';
import { VideoService } from '../applications/video.service';
import { VideoEntity } from '../entities/video.entity';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';

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
            findAll: jest.fn(),
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
      const user: ITokenPayload = { id: 'user-id', email: 'test@example.com' };
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

  describe('findAll', () => {
    it('should call VideoService.findAll and return all videos', async () => {
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

      jest.spyOn(videoService, 'findAll').mockResolvedValue(videos);

      const result = await videoController.findAll();

      expect(videoService.findAll).toHaveBeenCalled();
      expect(result).toEqual(videos);
    });
  });
});
