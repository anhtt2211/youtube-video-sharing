import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class RegisterRequestDto extends LoginRequestDto {
  @IsString()
  @IsNotEmpty()
  username: string;
}

export class LoginResponseDto {
  accessToken: string;
}

export class RegisterResponseDto extends LoginResponseDto {}
