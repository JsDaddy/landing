import * as express from 'express';
import { addCurrencyRate } from '../middleware/currency.middleware';
import { UserModel } from '../models/user.model';
import { CourseModel } from './../models/course.model';
import { StaticContentModel } from './../models/static_content.model';

export const courseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/courses/:id',
    addCurrencyRate(app),
    async (req: express.Request, res: express.Response) => {
      const { lang, id } = req.params;
      const banner = `${id}Banner`;
      const program = `${id}Program`;
      const description = `${id}Description`;
      try {
        const courseContent: HashMap = await new StaticContentModel().getContentHashMap([
          'advantagesCourses',
          'coursesMenu',
          banner,
          program,
          description,
          'footer',
          'contactsCourses',
        ], lang);
        courseContent.mainMenu = courseContent.coursesMenu;
        courseContent.mainMenu.content.menu = courseContent.mainMenu.content.menu.map((item: any) => {
          if (item.link === '#courses') {
            return {
              ...item,
              link: `/${lang}/courses#courses`,
            };
          }
          if (item.link === '#mentors') {
            return {
              ...item,
              link: `/${lang}/courses#mentors`,
            };
          }
          return item;
        });
        courseContent.mainMenu.content.languages = courseContent.mainMenu.content.languages.map((language: any) => {
          const langMenu = {
            ...language,
            link: `/${language.title.toLowerCase()}/courses/${id}`,
          };
          if (language.title.toLowerCase() !== lang) {
            return langMenu;
          }
          return {
            ...langMenu,
            active: 'active',
          };
        });
        courseContent.mainMenu.content.languages =
          courseContent.mainMenu.content.languages.map((language: any) => {
            if (language.title.toLowerCase() !== lang) {
              return language;
            }
            return {
              ...language,
              active: 'active',
            };
          });
        const coursesList: any[] = await new CourseModel().getAllContent({ lang });
        const courses: any = coursesList
          .reduce((acc: any, next: any) => [
            ...acc,
            {
              id: next.name,
              title: next.title,
            },
          ], []);
        const selectedCourse: any = await new CourseModel().getContent({
          lang,
          name: id,
        });

        const course = await new CourseModel().getContent({ name: id });
        const mentor: any = await new UserModel().getUser({ _id: course.mentor });
        const bannerContent = {
          duration: selectedCourse.duration,
          firstName: mentor.firstName[lang],
          lastName: mentor.lastName[lang],
          price: `${Math.round(req.params.currency * selectedCourse.price)}\₴ (~${selectedCourse.price}\$)`,
          shortDescription: selectedCourse.shortDescription,
          start: selectedCourse.start,
          title: selectedCourse.title,
        };
        mentor.firstName = mentor.firstName[lang];
        mentor.lastName = mentor.lastName[lang];
        return res.render('content/course', {
          banner: {
            ...courseContent[banner],
            content: {
              ...courseContent[banner].content,
              info: bannerContent,
            },
          },
          ...courseContent,
          courses,
          description: {
            ...courseContent[description],
            content: selectedCourse.description,
            descriptionImg: selectedCourse.descriptionImg,
          },
          lang,
          program: {
            ...courseContent[program],
            content: selectedCourse.program,
          },
          selectedCourse,
        });
      } catch (err) {
        return res.render('content/error');
      }
    },
  );
};
