import { formMiddleware } from './../middleware/form.middleware';
import { menuMiddleware } from '../middleware/menu.middleware';
import { Application, Request, Response } from 'express';
import { MainContentModel } from '../models/main.content.model';

export const mainCtrl: (app: Application) => void = (app: Application) => {
  app.get(
    '/main',
    menuMiddleware,
    formMiddleware,
    async (_req: Request, res: Response) => {
      try {
        console.log(_req.params);
        
        let mainContent: any = await new MainContentModel().getContent();
        console.log({...mainContent, ..._req.params});
        
        return res.render('main', {...mainContent, ..._req.params});

  
        // return res.status(200).json({ data: mainContent });
      } catch (err) {
        return res.status(400).json({ data: { message: err.toString() } });
      }
    }
  );
};
