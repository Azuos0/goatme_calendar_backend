import 'reflect-metadata';
import { ApolloServer } from 'apollo-server';
import * as database from './database';
import { schemafn } from './resolvers';

export class Server {
  private app: ApolloServer;

  constructor(private port = 3000) { }

  //responsible to initialize the server
  public async init(): Promise<void> {
    await this.setupApolloServer();
    await this.setupDatabase();
  }

  //config express
  private async setupApolloServer(): Promise<void> {
    const schema = await schemafn();
    this.app = new ApolloServer({ schema })
  }

  //establish the db's connection
  private async setupDatabase(): Promise<void> {
    await database.connect();
  }

  public getApp(): ApolloServer {
    return this.app;
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.info(`Server listening on port: ${this.port}`);
    })
  }
}