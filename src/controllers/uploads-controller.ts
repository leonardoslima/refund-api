import { Request, Response } from 'express';

class UploadsController {
  async create(request: Request, response: Response) {
    response.json({ message: 'Ok' });
  }
}

export { UploadsController }