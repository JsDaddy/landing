import * as express from 'express';
import { StaticContentModel } from './../models/static_content.model';

export const courseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/courses/:id',
    async (req: express.Request, res: express.Response) => {
      const { lang } = req.params;
      try {
        const courseContent: HashMap = await new StaticContentModel().getContentHashMap([
          'coursesMenu',
          'advantagesCourses',
          'contactsCourses',
        ], lang);
        return res.render('content/course', { ...courseContent });
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

};
