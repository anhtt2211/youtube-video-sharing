import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { VideoEntity } from '../entities/video.entity';
import { VideoService } from './video.service';
import { VideoGateway } from './video.socket';

import { ListResponse } from 'src/shared/dtos/response.dto';

const mockConfigService = {
  get(key: string) {
    switch (key) {
      case 'YouTubeApiKey':
        return 'mock-api-key'; // Example configuration key
      default:
        return null;
    }
  },
};

describe('VideoService', () => {
  let service: VideoService;
  let videoRepository: Repository<VideoEntity>;
  let videoGateway: VideoGateway;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        VideoService,
        {
          provide: getRepositoryToken(VideoEntity),
          useClass: Repository,
        },
        {
          provide: VideoGateway,
          useValue: {
            notifyNewVideo: jest.fn(),
          },
        },
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
      ],
    }).compile();

    service = module.get<VideoService>(VideoService);
    videoRepository = module.get<Repository<VideoEntity>>(
      getRepositoryToken(VideoEntity),
    );
    videoGateway = module.get<VideoGateway>(VideoGateway);
    configService = module.get<ConfigService>(ConfigService);
  });

  describe('create', () => {
    it('should throw BadRequestException if URL is invalid', async () => {
      await expect(
        service.create({ url: 'invalid-url' }, {} as any),
      ).rejects.toThrow('Invalid YouTube URL');
    });

    it('should notify new video after creation', async () => {
      const mockVideoData: VideoEntity = {
        url: 'https://youtu.be/validid',
        title: 'Test Video',
        thumbnailUrl: 'https://example.com/thumbnail.jpg',
        description: 'Description',
      } as VideoEntity;

      jest.spyOn(service as any, 'isValidYouTubeUrl').mockReturnValue(true);
      jest.spyOn(service as any, 'extractVideoId').mockReturnValue('validid');
      jest.spyOn(service as any, 'isVideoIdUnique').mockResolvedValue(true);
      jest
        .spyOn(service as any, 'fetchYouTubeMetadata')
        .mockResolvedValue(mockVideoData);
      jest.spyOn(videoRepository, 'save').mockResolvedValue(mockVideoData);

      const result = await service.create(
        { url: 'https://youtu.be/validid' },
        {} as any,
      );

      expect(result).toEqual(mockVideoData);
      expect(videoGateway.notifyNewVideo).toHaveBeenCalledWith(mockVideoData);
    });
  });

  describe('getFeeds', () => {
    it('returns paginated video feeds', async () => {
      const videoEntities: VideoEntity[] = [
        {
          id: '1',
          url: 'https://youtu.be/validid',
          title: 'Test Video',
          user: {} as UserEntity,
        } as VideoEntity,
      ];
      const listResponse = new ListResponse<VideoEntity>(
        videoEntities,
        1,
        1,
        10,
      );

      jest
        .spyOn(videoRepository, 'findAndCount')
        .mockResolvedValue([videoEntities, 1]);

      const result = await service.getFeeds(1, 10);

      expect(videoRepository.findAndCount).toHaveBeenCalledWith({
        relations: ['user'],
        order: { updatedAt: 'DESC' },
        skip: 0,
        take: 10,
      });
      expect(result).toEqual(expect.objectContaining(listResponse));
    });
  });
});
