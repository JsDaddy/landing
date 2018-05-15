import * as express from 'express';
import { addCurrencyRate } from '../middleware/currency.middleware';
import {CourseModel} from '../models/course.model';
import {StaticContentModel} from '../models/static_content.model';
import {UserModel} from '../models/user.model';
import { logger } from './../main';

export function coursesCtrl(app: express.Application) {
  app.get(
    '/:lang/courses',
    addCurrencyRate(app),
    async (req: express.Request, res: express.Response) => {
      const { lang } = req.params;
      try {
        const coursesContent: IHashMap = await new StaticContentModel().getContentHashMap([
          'coursesHead',
          'coursesThumbs',
          'coursesMenu',
          'coursesBanner',
          'about',
          'advantagesCourses',
          'contactsCourses',
          'mentors',
          'footer',
        ], req.params.lang);
        coursesContent.head = coursesContent.coursesHead.content;
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
            about: user.about[lang],
            firstName: user.firstName[lang],
            lastName: user.lastName[lang],
          };
        });
        const coursesThumbs: any[] = await new CourseModel().getAllContent({lang});
        coursesContent.coursesThumbs.content = coursesThumbs
          .map((thumb) => {
            return {...thumb,
              href: `courses/${thumb.name}`,
              price: `${Math.round(req.params.currency * thumb.price)}\₴ (~${thumb.price}\$)`,
            };
          });
        const courses: any = coursesThumbs
          .reduce((acc: any, next: any) => [...acc, {id: next.name, title: next.title}], []);
        return res.render(
          'content/courses',
          {
            ...coursesContent,
            courses,
            lang,
            users,
          });
      } catch (err) {
        logger.log('error', err);
        return res.render(`content/error-${lang}`);
      }
    },
  );

  app.get(
    '/:lang/courses/:id',
    async (_req: express.Request, res: express.Response) => res.json({ data: 'Success' }),
  );
}
