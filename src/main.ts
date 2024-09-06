import express, { Request, Response } from 'express';

const server = express();

server.use(express.json());

server.get('/task/:id', (req: Request, res: Response) => {
  res.json(req.params);
});

server.post('/task', (req: Request, res: Response) => {
  res.json({ a: false });
});

const port = 2000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
