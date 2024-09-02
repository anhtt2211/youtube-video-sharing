import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';

export const seedingForUsers = async (repository: Repository<UserEntity>) => {
  const user1 = repository.create({
    email: 'johndoe@example.com',
    username: 'johndoe',
    password: 'Test@123',
  });
  const user2 = repository.create({
    email: 'janedoe@example.com',
    username: 'janedoe',
    password: 'Test@123',
  });

  return await repository.save([user1, user2]);
};
