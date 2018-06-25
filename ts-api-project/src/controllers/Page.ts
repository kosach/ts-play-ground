import { Request, Response } from 'express';
export function page(req: Request, res: Response): void {
  res.render('page', {
    title: 'Hello, Express!',
    content: '...'
  });
}