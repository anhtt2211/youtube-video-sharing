import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import {
  LoginRequestDto,
  LoginResponseDto,
  RegisterRequestDto,
  RegisterResponseDto,
} from '../dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    private jwtService: JwtService,
  ) {}

  async login({ email, password }: LoginRequestDto): Promise<LoginResponseDto> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await this.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const payload: ITokenPayload = {
      id: user.id,
      email: user.email,
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    return { accessToken };
  }

  async register(body: RegisterRequestDto): Promise<RegisterResponseDto> {
    const userExists = await this.userRepository.findOne({
      where: { email: body.email },
    });
    if (userExists) {
      throw new Error('User already exists');
    }

    const user = await this.userRepository.save(body);

    const payload: ITokenPayload = {
      id: user.id,
      email: user.email,
    };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '1h' });
    return { accessToken };
  }

  private async verifyPassword(
    password: string,
    storedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, storedPassword);
  }
}
