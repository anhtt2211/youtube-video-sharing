import * as bcrypt from 'bcrypt';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

describe('AuthController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<UserEntity>;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          entities: [UserEntity],
          synchronize: true,
        }),
        AuthModule,
      ],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    userRepository = moduleFixture.get<Repository<UserEntity>>(
      getRepositoryToken(UserEntity),
    );
  });

  afterEach(async () => {
    await userRepository.clear();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/auth/register (POST) - success', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('accessToken');
  });

  it('/auth/register (POST) - failure (user already exists)', async () => {
    await userRepository.save({
      email: 'test@example.com',
      password: 'passwordHash', // This should be a hash if bcrypt hashing is applied
    });

    const response = await request(app.getHttpServer())
      .post('/auth/register')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('User already exists');
  });

  it('/auth/login (POST) - success', async () => {
    const passwordHash = await bcrypt.hash('password', 10);
    await userRepository.save({
      email: 'test@example.com',
      password: passwordHash,
    });

    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'password' });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('accessToken');
  });

  it('/auth/login (POST) - failure (invalid credentials)', async () => {
    const response = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'wrong@example.com', password: 'password' });

    expect(response.status).toBe(400);
    expect(response.body.message).toEqual('User not found');

    const passwordHash = await bcrypt.hash('password', 10);
    await userRepository.save({
      email: 'test@example.com',
      password: passwordHash,
    });

    const responseInvalidPassword = await request(app.getHttpServer())
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'wrongpassword' });

    expect(responseInvalidPassword.status).toBe(400);
    expect(responseInvalidPassword.body.message).toEqual('Invalid password');
  });
});
