import * as express from 'express';
import { CourseModel } from './../models/course.model';
import { StaticContentModel } from './../models/static_content.model';

export const courseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/courses/:id',
    async (req: express.Request, res: express.Response) => {
      const { lang, id } = req.params;
      try {
        const courseContent: HashMap = await new StaticContentModel().getContentHashMap([
          'coursesMenu',
          'advantagesCourses',
          'contactsCourses',
        ], lang);
        const coursesList: any[] = await new CourseModel().getAllContent({lang});
        const courses: any = coursesList
          .reduce((acc: any, next: any) => [...acc, {id: next.name, title: next.title}], []);
        const selectedCourse: any = await new CourseModel().getContent({lang, name: id });
        return res.render('content/course', { ...courseContent, courses, lang, selectedCourse });
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

};
