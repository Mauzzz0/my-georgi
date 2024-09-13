import { Request, Response, Router } from 'express';

export const taskRouter = Router();

taskRouter.get('', (req: Request, res: Response) => {
  res.json({ name: 'Get all', items: [] });
});

taskRouter.get('/favorites', (req: Request, res: Response) => {
  res.json({ name: 'It is your favorites tasks', items: [] });
});

taskRouter.get('/:id', (req: Request, res: Response) => {
  const id = req.params.id;

  res.json({ name: 'Get One By Id', id });
});
