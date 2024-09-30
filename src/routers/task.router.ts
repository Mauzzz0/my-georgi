import { plainToInstance } from 'class-transformer';
import { validateSync } from 'class-validator';
import { Request, Response, Router } from 'express';

import { NumberIdDto } from '../dto';

export const taskRouter = Router();

taskRouter.get('', (req: Request, res: Response) => {
  res.json({ name: 'Get all', items: [] });
});

taskRouter.get('/:id', (req: Request, res: Response) => {
  const instance = plainToInstance(NumberIdDto, req.params);
  const errors = validateSync(instance);

  if (errors.length) {
    const constraints = errors[0].constraints;
    let message = 'Unknown validation error';

    if (constraints) {
      message = constraints[Object.keys(constraints)[0]];
    }

    throw new Error(message);
  }

  res.json({ name: 'Возвращена одна задача', id: instance.id });
});
