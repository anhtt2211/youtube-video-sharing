import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
  statusCode: number;
  message: string;
  data: T;
  debug?: any;
}

@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>>
{
  constructor(private readonly configService: ConfigService) {}

  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map((data) => {
        const response: Response<T> = {
          statusCode: context.switchToHttp().getResponse().statusCode,
          message: data?.message,
          data: data,
        };

        if (this.configService.get('NODE_ENV') !== 'production') {
          response.debug = {
            controller: context.getClass().name,
            queries: request['queries'] || [],
          };
        }

        return response;
      }),
    );
  }
}
