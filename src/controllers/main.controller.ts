import * as express from 'express';
import { StaticContentModel } from './../models/static_content.model';

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const mainContent: HashMap =
        await new StaticContentModel().getContentHashMap(['mainMenu', 'main-banner', 'services']);
        return res.render('content/main', mainContent);

      } catch (err) {
        return res.render('content/error');
      }
    },
  );

};
