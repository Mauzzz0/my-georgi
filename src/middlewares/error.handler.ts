import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (!err) next();

  res.status(500).send({
    code: 'error',
    message: err.message,
  });
};
