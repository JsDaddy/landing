import * as express from 'express';
import { StaticContentModel } from './../models/static_content.model';
import { UserModel } from './../models/user.model';

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const manContent: HashMap =
        await new StaticContentModel().getContentHashMap(['main-menu', 'main-banner', 'services']);
        const users: any[] = await new UserModel().getUsers();
        return res.render('content/main', {...manContent, users});
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

};
