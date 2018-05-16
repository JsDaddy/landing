import * as config from 'config';
import * as express from 'express';
import { CourseModel } from './../models/course.model';
// tslint:disable-next-line:no-var-requires
const sm = require('sitemap');
const { cacheTime, hostname } = config.get('sitemap');

export const sitemapCtrl = (app: express.Application) => {
  app.get(
    '/sitemap.xml',
    async (_req: express.Request, res: express.Response) => {
      try {
        const courses: any[] = await new CourseModel().getAllContent({});
        const coursesUrls = courses.reduce((acc: any, course: any) => {
          return [...acc, { url: `/${course.lang}/courses/${course.name}`, changefreq: 'weekly' }];
        }, []);

        const courseUrls = app.get('config').get('langs').reduce((acc: any, lang: any) => {
          return [...acc, { url: `/${lang}/courses`, changefreq: 'weekly' }];
        }, []);

        const sitemap = sm.createSitemap({
          cacheTime,
          hostname,
          urls: [
            { url: '/', changefreq: 'weekly' },
            ...courseUrls,
            ...coursesUrls,
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
