import { NextFunction, Request, Response } from 'express';

export const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('Пришел запрос', {
    method: req.method,
    path: req.path,
    body: req.body,
  });

  next();
};
