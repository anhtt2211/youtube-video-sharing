import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { VideoEntity } from 'src/video/entities/video.entity';

@WebSocketGateway()
export class VideoGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected:', client.id);
  }

  notifyNewVideo(video: VideoEntity) {
    this.server.emit('newVideo', {
      title: video.title,
      user: video.user.username,
    });
  }
}
