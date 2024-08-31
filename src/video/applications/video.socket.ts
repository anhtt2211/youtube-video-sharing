import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { NotificationService } from 'src/notification/notification.service';
import { UserService } from 'src/user/user.service';
import { VideoEntity } from 'src/video/entities/video.entity';

@WebSocketGateway()
export class VideoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly notificationService: NotificationService,
    private readonly userService: UserService,
  ) {}

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  async notifyNewVideo(video: VideoEntity) {
    const { user, title, url } = video;

    const message = `New video titled "${title}" uploaded by ${user.username}`;

    const users = await this.userService.getUsers();

    for (const recipient of users) {
      if (recipient.id !== user.id) {
        const notification = await this.notificationService.create({
          recipient,
          sender: user,
          message,
          url,
        });

        // Emit the notification if the user is connected
        this.server.to(recipient.id).emit('newNotification', notification);
      }
    }
  }
}
