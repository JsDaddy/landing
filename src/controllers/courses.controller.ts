import * as express from 'express';
import { UserModel } from './../models/user.model';

export function coursesCtrl(app: express.Application) {

  app.get(
    '/:lang/courses',
    async (_req: express.Request, res: express.Response) => {
      try {
        const users: any[] = await new UserModel().getUsers('mentor');
        return res.render('content/courses', {...users});
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

  app.get(
    '/:lang/courses/:id',
    async (_req: express.Request, res: express.Response) => res.json({data: 'Success'}),
  );
}
