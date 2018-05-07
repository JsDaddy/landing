import { Request, Response } from 'express';

export function consumer(view: string, model: any) {
  return async (req: Request, res: Response) => {
    try {
      const content: any = await new model().getContent();
      return res.render(view, { ...content, ...req.params });
    } catch (err) {
      return res.render('content/error');
    }
  };
}
