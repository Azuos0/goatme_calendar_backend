import { Server } from './server';
import env from 'dotenv';

//Api start point
(async (): Promise<void> => {
  env.config();
  const server = new Server(Number(process.env.APP_PORT));
  await server.init();
  server.start();
})()