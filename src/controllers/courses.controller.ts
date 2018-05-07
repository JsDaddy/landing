import { Application, Request, Response } from 'express';
import { menuMiddleware } from '../middleware/menu.middleware';
import { advantagesMiddleware } from './../middleware/advantages.middleware';
import { formMiddleware } from './../middleware/form.middleware';
import { CourseModel } from './../models/course.model';
import { CoursesModel } from './../models/courses.model';

export const coursesCtrl: (app: Application) => void = (app: Application) => {
  app.get(
    '/:lang/courses',
    menuMiddleware('courses'),
    formMiddleware('courses'),
    advantagesMiddleware,
    async (_req: Request, res: Response) => {
      try {
        const coursesContent: any = await new CoursesModel().getCoursesContent();
        return res.render('courses_landing', {...coursesContent, ..._req.params});
      } catch (err) {
        return res.status(400).json({ data: { message: err.toString() } });
      }
    },
  );

  app.get(
    '/:lang/courses/:id',
    menuMiddleware('course'),
    formMiddleware('course'),
    advantagesMiddleware,
    async (_req: Request, res: Response) => {
      try {
        const mainContent: any = await new CourseModel().getCourseContent();
        return res.render('course_landing', {...mainContent, ..._req.params});
      } catch (err) {
        return res.status(400).json({ data: { message: err.toString() } });
      }
    },
  );
};
