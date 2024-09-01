import {
  Controller,
  Get,
  HttpCode,
  Param,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CurrentUser } from 'src/shared/decorators/current-user.decorator';
import { ITokenPayload } from 'src/shared/interfaces/token-payload.interface';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  @HttpCode(200)
  findAll(
    @Query('page') page: number = 1,
    @Query('pageSize') pageSize: number = 5,
    @CurrentUser() user: ITokenPayload,
  ) {
    return this.notificationService.getNotifications(page, pageSize, user);
  }

  @Put(':id/read')
  @HttpCode(200)
  markAsRead(@Param('id') id: string, @CurrentUser() user: ITokenPayload) {
    return this.notificationService.markAsRead(id, user);
  }
}
