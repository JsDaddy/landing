import * as express from 'express';
import { menuMiddleware } from '../middleware/menu.middleware';
import { CourseModel } from '../models/course.model';
import { CoursesModel } from '../models/courses.model';

import { advantagesMiddleware } from '../middleware/advantages.middleware';
import { addCurrencyRate } from '../middleware/currency.middleware';
import { languagesMenu } from '../middleware/language.menu.middleware';
import { formMiddleware } from './../middleware/form.middleware';
import { consumer } from './consumer';

export function coursesCtrl(app: express.Application) {

  app.get(
    '/:lang/courses',
    languagesMenu,
    addCurrencyRate(app),
    advantagesMiddleware,
    menuMiddleware('courses'),
    formMiddleware('courses'),
    async (req: express.Request, res: express.Response) => {
      try {
        const content: any = await new CoursesModel().getContent();

        const allCourses = await new CourseModel().getAllContent({
          hidden: false,
          lang: req.params.lang,
        });
        content.courses.courseList = allCourses.map((data) => {
          return {
            id: data.link_href,
            title: data.title,
          };
        });
        content.courses.courseItems = allCourses.map((data) => {
          const uah = req.params.rate * parseInt(data.price, 10);
          return {
            ...data,
            link_href: `/$lang/courses/${data.link_href}`,
            price:
              `${Math.round(uah)}\₴ (~${parseInt(data.price, 10)}\$)`,
          };
        });

        content.ourTeachers.sliderTeachers = allCourses
          .map((data) => data.teachers)
          .reduce((acc, item) => {
            return [...acc, item];
          }, []);

        return res.render('content/courses', {
          ...content,
          ...req.params,
        });
      } catch (err) {
        // tslint:disable-next-line
        console.log(err);
        return res.render('content/error');
      }
    },
  );

  app.get(
    '/:lang/courses/:id',
    languagesMenu,
    addCurrencyRate(app),
    advantagesMiddleware,
    menuMiddleware('course'),
    formMiddleware('course'),
    consumer('content/course', CourseModel),
  );
}
