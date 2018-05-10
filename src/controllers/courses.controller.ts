import * as express from 'express';
import { StaticContentModel } from '../models/static_content.model';
import { UserModel } from './../models/user.model';

export function coursesCtrl(app: express.Application) {
  app.get(
    '/:lang/courses',
    async (req: express.Request, res: express.Response) => {
      try {
        const { lang } = req.params;
        const coursesContent: HashMap = await new StaticContentModel().getContentHashMap([
          'coursesMenu',
          'coursesBanner',
          'about',
          'advantagesCourses',
          'contactsCourses',
          'mentors',
        ], req.params.lang);
        coursesContent.mainMenu = coursesContent.coursesMenu;
        const users: any[] = await new UserModel().getUsers('mentor');
        coursesContent.mainMenu.content.languages = coursesContent.mainMenu.content.languages.map((language: any) => {
          if (language.title.toLowerCase() !== lang) {
            return language;
          }
          return {
            ...language,
            active: 'active',
          };
        });
        coursesContent.mentors.content = users.map((user) => {
          return {
            ...user,
            firstName: user.firstName[lang],
            lastName: user.lastName[lang],
          };
        });
        return res.render(
          'content/courses',
          {
            ...coursesContent,
            users,
          });
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
