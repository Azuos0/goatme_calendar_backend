import { Request, Response } from 'express';
export class TempController {
  async temp(request: Request, response: Response) {
    return response.status(200).json({hello: 'Hello World'});
  }
}