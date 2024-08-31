import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequestDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class RegisterRequestDto extends LoginRequestDto {}

export class LoginResponseDto {
  accessToken: string;
}

export class RegisterResponseDto extends LoginResponseDto {}
