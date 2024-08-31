import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VideoService } from './video.service';
import { VideoEntity } from '../entities/video.entity';
import { VideoGateway } from './video.socket';
import { UserEntity } from 'src/user/entities/user.entity';
import { BadRequestException } from '@nestjs/common';

describe('VideoService', () => {
  let service: VideoService;
  let videoRepository: Repository<VideoEntity>;
  let videoGateway: VideoGateway;

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
      ],
    }).compile();

    service = module.get<VideoService>(VideoService);
    videoRepository = module.get<Repository<VideoEntity>>(
      getRepositoryToken(VideoEntity),
    );
    videoGateway = module.get<VideoGateway>(VideoGateway);
  });

  describe('create', () => {
    it('should throw a BadRequestException if the URL is invalid', async () => {
      const video = { url: 'invalid-url' };
      const user = {} as UserEntity;
      await expect(service.create(video, user)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should create and save a new video and notify via gateway', async () => {
      const video = {
        url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        title: 'Test Video',
      };
      const user = { id: '1', username: 'testuser' } as UserEntity;
      const savedVideo = { ...video, id: '1', user } as VideoEntity;

      jest.spyOn(videoRepository, 'create').mockReturnValue(savedVideo);
      jest.spyOn(videoRepository, 'save').mockResolvedValue(savedVideo);

      const result = await service.create(video, user);

      expect(videoRepository.create).toHaveBeenCalledWith({ ...video, user });
      expect(videoRepository.save).toHaveBeenCalledWith(savedVideo);
      expect(result).toEqual(savedVideo);
      expect(videoGateway.notifyNewVideo).toHaveBeenCalledWith(savedVideo);
    });
  });

  describe('findAll', () => {
    it('should return an array of videos with user relations', async () => {
      const videos: VideoEntity[] = [
        {
          id: '1',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Video 1',
          user: {} as UserEntity,
        } as VideoEntity,
        {
          id: '2',
          url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          title: 'Video 2',
          user: {} as UserEntity,
        } as VideoEntity,
      ];

      jest.spyOn(videoRepository, 'find').mockResolvedValue(videos);

      const result = await service.findAll();

      expect(videoRepository.find).toHaveBeenCalledWith({
        relations: ['user'],
      });
      expect(result).toEqual(videos);
    });
  });
});
