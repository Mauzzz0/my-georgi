import express from 'express';

import { logRoutes } from './logRoutes';
import { errorHandler, logMiddleware } from './middlewares';
import { taskRouter } from './routers';

const server = express();

server.use(express.json());

server.use(logMiddleware);

server.use('/task', taskRouter);

server.use(errorHandler);

logRoutes(server);

const port = 2000;

server.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
