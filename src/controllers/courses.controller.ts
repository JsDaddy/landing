import * as express from 'express';
import { StaticContentModel } from '../models/static_content.model';
import { UserModel } from './../models/user.model';

export function coursesCtrl(app: express.Application) {
  app.get(
    '/:lang/courses',
    async (req: express.Request, res: express.Response) => {
      try {
        const coursesContent: HashMap = await new StaticContentModel().getContentHashMap([
          'coursesMenu',
          'coursesBanner',
          'about',
          'advantagesCourses',
          'contactsCourses',
        ], req.params.lang);
        coursesContent.mainMenu = coursesContent.coursesMenu;
        const users: any[] = await new UserModel().getUsers('mentor');

        return res.render('content/courses', {...coursesContent, ...users});
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

  app.get(
    '/:lang/courses/:id',
    async (_req: express.Request, res: express.Response) => res.json({ data: 'Success' }),
  );
}
