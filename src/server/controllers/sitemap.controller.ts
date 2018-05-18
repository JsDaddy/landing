import * as config from 'config';
import * as express from 'express';
import {CourseModel} from './../models/course.model';
const {cacheTime, hostname} = config.get('sitemap');
import {ProjectsModel} from '../models/projects.model';
// tslint:disable-next-line:no-var-requires
const sm = require('sitemap');

export const sitemapCtrl = (app: express.Application) => {
  app.get(
    '/sitemap.xml',
    async (_req: express.Request, res: express.Response) => {
      try {
        const courses: any[] = await new CourseModel().getAllContent({});
        const projects: any[] = await new ProjectsModel().getContent({});

        const coursesUrls = courses.reduce((acc: any, course: any) => {
          return [...acc, {url: `/${course.lang}/courses/${course.name}`, changefreq: 'weekly'}];
        }, []);

        const courseUrls = app.get('config').get('langs').reduce((acc: any, lang: any) => {
          return [...acc, {url: `/${lang}/courses`, changefreq: 'weekly'}];
        }, []);

        const projectsUrls = projects.reduce((acc: any, project: any) => {
          return [...acc, {url: `/projects/${project.name}`, changefreq: 'weekly'}];
        }, []);
        const sitemap = sm.createSitemap({
          cacheTime,
          hostname,
          urls: [
            {url: '/', changefreq: 'weekly'},
            ...courseUrls,
            ...coursesUrls,
            ...projectsUrls,
              {url: '/about-us', changefreq: 'weekly'},
              {url: '/community', changefreq: 'weekly'},
          ],
        });

        sitemap.toXML((err: any, xml: any) => {
          if (err) {
            return res.status(500).end();
          }
          res.header('Content-Type', 'application/xml');
          res.send(xml);
        });

      } catch (err) {
        return res.render(`content/error-en`);
      }
    },
  );
};
