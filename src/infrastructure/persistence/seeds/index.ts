import { AppDataSource } from 'ormconfig';
import { UserEntity } from 'src/user/entities/user.entity';
import { VideoEntity } from 'src/video/entities/video.entity';
import { seedingForUsers } from './user.seed';
import { seedingForVideos } from './video.seed';

async function seed() {
  const connection = await AppDataSource.initialize();
  const userRepository = connection.getRepository(UserEntity);
  const videoRepository = connection.getRepository(VideoEntity);

  // Seed
  const users = await seedingForUsers(userRepository);
  await seedingForVideos(videoRepository, users);

  console.log('Seeding completed.');
  await connection.destroy();
}

seed().catch((error) => {
  console.error('Seeding failed:', error);
  process.exit(1);
});
