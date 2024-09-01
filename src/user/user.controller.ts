import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';

@Controller('users')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor() {}

  @Get('me')
  getMe(@CurrentUser() user: ITokenPayload) {
    return user;
  }
}
