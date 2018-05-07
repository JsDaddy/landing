import { Application, Request, Response } from 'express';
import { menuMiddleware } from '../middleware/menu.middleware';
import { MainContentModel } from '../models/main.content.model';
import { formMiddleware } from './../middleware/form.middleware';

export const mainCtrl: (app: Application) => void = (app: Application) => {
  app.get(
    '/',
    menuMiddleware,
    formMiddleware,
    async (_req: Request, res: Response) => {
      try {
        const mainContent: any = await new MainContentModel().getContent();
        console.log({...mainContent, ..._req.params});
        return  res.render('main', {...mainContent, ..._req.params});

      } catch (err) {
        return res.status(400).json({ data: { message: err.toString() } });
      }
    },
  );
};
