import express, { Application } from 'express';
import cors from 'cors';
import router from './router';
import * as database from './database';

export class Server {
  private app: Application;

  constructor(private port = 3000) {
    this.app = express();
  }

  //responsible to initialize the server
  public async init(): Promise<void> {
    this.setupExpress();
    this.setupRouter();
    await this.setupDatabase();
  }

  //config express
  private setupExpress(): void {
    this.app.use(cors());
    this.app.use(express.json());
  }

  //add router to app
  private setupRouter(): void {
    this.app.use(router);
  }

  //establish the db's connection
  private async setupDatabase(): Promise<void> {
    await database.connect();
  }

  public getApp(): Application {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info(`Server listening on port: ${this.port}`);
    })
  }
}