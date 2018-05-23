import * as express from 'express';
import {addCurrencyRate} from '../middleware/currency.middleware';
import {CourseModel} from '../models/course.model';
import {StaticContentModel} from '../models/static_content.model';
import {UserModel} from '../models/user.model';
import {logger} from './../main';
import {UtilsService} from './../services/utils.service';

export const courseCtrl = (app: express.Application) => {
    app.get(
        '/:lang/courses/:id',
        addCurrencyRate(app),
        async (req: express.Request, res: express.Response) => {
            // tslint:disable-next-line:prefer-const
            let {lang, id} = req.params;
            const banner = `${id}Banner`;
            const program = `${id}Program`;
            const description = `${id}Description`;
            const requirements = `${id}Requirements`;
            const head = `${id}Head`;
            try {
                const courseContent: IHashMap = await new StaticContentModel().getContentHashMap([
                    {
                        query: head,
                        replace: 'head',
                        rewrite: true,
                    },
                    {
                        query: 'coursesMenu',
                        replace: 'mainMenu',
                    },
                    'advantagesCourses',
                    banner,
                    program,
                    description,
                    requirements,
                    'footer',
                    'contactsCourses',
                ], lang);

                courseContent.mainMenu.content.menu =
                    new UtilsService().getCourseLinks(courseContent.mainMenu.content.menu, lang);

                courseContent.mainMenu.content.languages =
                    new UtilsService().getLangulagesLinks(courseContent.mainMenu.content.languages, lang, true, id);

                const coursesFormList: any[] = await new CourseModel().getAllContent({lang});
                const courses: any = coursesFormList
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
                if (selectedCourse === null) {
                    throw new Error('selected Course not found');
                }
                const course = await new CourseModel().getContent({name: id});
                const mentor: any = await new UserModel().getUser({_id: course.mentor});
                if (mentor === null) {
                    throw new Error('mentor not found');
                }
                mentor.firstName = mentor.firstName[lang];
                mentor.lastName = mentor.lastName[lang];
                const bannerContent = {
                    about: selectedCourse.about,
                    desc: selectedCourse.desc,
                    duration: selectedCourse.duration,
                    firstName: mentor.firstName,
                    lastName: mentor.lastName,
                    price: `${Math.round(req.params.currency * selectedCourse.price)}\₴ (~${selectedCourse.price}\$)`,
                    programm: selectedCourse.programm,
                    shortDescription: selectedCourse.shortDescription,
                    start: selectedCourse.start,
                    title: selectedCourse.title,
                };
                const courseBanner = courseContent[banner];
                return res.render('content/course', {
                    banner: {
                        ...courseBanner,
                        content: {
                            ...courseBanner.content,
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
                    requirements: {
                        ...courseContent[requirements],
                        content: selectedCourse.requirements,
                    },
                    selectedCourse,
                });
            } catch (err) {
                logger.log('error', err);
                // TODO aggregate from db
                lang = app.get('config')
                    .get('langs')
                    .includes(lang) ? lang : 'en';
                return res.render(`content/error-${lang}`);
            }
        },
    );
};
