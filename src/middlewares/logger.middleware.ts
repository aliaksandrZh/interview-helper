import { NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const date = new Date();
    const { url, method, body: bodyReq } = req;
    console.log(
      `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} - ${url} -  ${method}`,
      bodyReq,
    );
    next();
  }
}
