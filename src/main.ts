import express from 'express';

import { logRoutes } from './logRoutes';
import { taskRouter } from './routers';

const server = express();

server.use(express.json());

server.use('/task', taskRouter);

logRoutes(server);

const port = 2000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
