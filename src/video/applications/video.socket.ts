import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { VideoEntity } from 'src/video/entities/video.entity';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { UserService } from 'src/user/application/user.service';
import { NotificationService } from 'src/notification/application/notification.service';

@WebSocketGateway({
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    methods: ['GET', 'POST'],
    credentials: true,
  },
})
export class VideoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private userSocketMap: Map<string, string> = new Map();

  constructor(
    private readonly notificationService: NotificationService,
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
    // Remove the disconnected socket from our map
    for (const [userId, socketId] of this.userSocketMap.entries()) {
      if (socketId === client.id) {
        this.userSocketMap.delete(userId);
        break;
      }
    }
  }

  @SubscribeMessage('register')
  handleRegister(client: Socket, userId: string) {
    this.userSocketMap.set(userId, client.id);
    console.log(`User ${userId} registered with socket ${client.id}`);
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

        // Get the socket ID for the recipient
        const recipientSocketId = this.userSocketMap.get(recipient.id);
        if (recipientSocketId) {
          Logger.debug(
            '🚀 ~ VideoGateway ~ notifyNewVideo ~ recipientSocketId:',
            recipientSocketId,
          );
          // Emit the notification if the user is connected
          this.server
            .to(recipientSocketId)
            .emit('newNotification', notification);
        }
      }
    }
  }
}
