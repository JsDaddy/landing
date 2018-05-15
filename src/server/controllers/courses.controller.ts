import * as express from 'express';
import { addCurrencyRate } from '../middleware/currency.middleware';
import {CourseModel} from '../models/course.model';
import {StaticContentModel} from '../models/static_content.model';
import {UserModel} from '../models/user.model';
import { logger } from './../main';
import { UtilsService } from './../services/utils.service';

export function coursesCtrl(app: express.Application) {
  app.get(
    '/:lang/courses',
    addCurrencyRate(app),
    async (req: express.Request, res: express.Response) => {
      const { lang } = req.params;
      try {
        const coursesContent: IHashMap = await new StaticContentModel().getContentHashMap([
          { query: 'coursesHead', replace: 'head', rewrite: true },
          { query: 'coursesMenu', replace: 'mainMenu' },
          'coursesThumbs',
          'coursesBanner',
          'about',
          'advantagesCourses',
          'contactsCourses',
          'mentors',
          'footer',
        ], req.params.lang);

        const users: any[] = await new UserModel().getUsers('mentor');

        coursesContent.mainMenu.content.languages =
        new UtilsService().getLangulagesLinks(coursesContent.mainMenu.content.languages, lang);

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

}
