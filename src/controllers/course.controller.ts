import * as express from 'express';
import {CourseModel} from './../models/course.model';
import {StaticContentModel} from './../models/static_content.model';

export const courseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/courses/:id',
    async (req: express.Request, res: express.Response) => {
      const {lang, id} = req.params;
      const banner = `${id}Banner`;
      const program = `${id}Program`;
      const description = `${id}Description`;
      try {
        const courseContent: HashMap = await new StaticContentModel().getContentHashMap([
          'coursesMenu',
          banner,
          program,
          description,
        ], lang);
        courseContent.mainMenu = courseContent.coursesMenu;
        courseContent.mainMenu.content.languages = courseContent.mainMenu.content.languages.map((language: any) => {
          if (language.title.toLowerCase() !== lang) {
            return language;
          }
          return {
            ...language,
            active: 'active',
          };
        });
        const coursesList: any[] = await new CourseModel().getAllContent({lang});
        const courses: any = coursesList
          .reduce((acc: any, next: any) => [...acc, {id: next.name, title: next.title}], []);
        const selectedCourse: any = await new CourseModel().getContent({lang, name: id});
        return res.render('content/course', {
          banner: courseContent[banner],
          ...courseContent,
          courses,
          description: courseContent[description],
          program: courseContent[program],
          selectedCourse,
        });
      } catch (err) {
        return res.render('content/error');
      }
    },
  );
};
