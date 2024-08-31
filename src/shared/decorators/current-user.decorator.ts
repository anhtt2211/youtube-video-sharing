import { createParamDecorator, ExecutionContext } from '@nestjs/common';

import { ITokenPayload } from '../interfaces/token-payload.interface';

export const CurrentUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): ITokenPayload => {
    const request = ctx.switchToHttp().getRequest();
    return request.user; // Assuming 'user' is attached to the request in your authentication middleware
  },
);
