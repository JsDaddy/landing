import { Application } from 'express';
import { courseCtrl } from './course.controller';
import { coursesCtrl } from './courses.controller';
import { mailerCtrl } from './mailer.controller';
import { mainCtrl } from './main.controller';
import { sitemapCtrl } from './sitemap.controller';

export const controllers: (app: Application) => void = (app: Application) => {
  mainCtrl(app);
  courseCtrl(app);
  coursesCtrl(app);
  mailerCtrl(app);
  sitemapCtrl(app);
};
