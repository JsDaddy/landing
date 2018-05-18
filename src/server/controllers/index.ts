import { Application } from 'express';
import { aboutUsCtrl } from './about-us.controller';
import { courseCtrl } from './course.controller';
import { coursesCtrl } from './courses.controller';
import { mailerCtrl } from './mailer.controller';
import { mainCtrl } from './main.controller';
import { projectsCtrl } from './projects.controller';
import { sitemapCtrl } from './sitemap.controller';

export const controllers: (app: Application) => void = (app: Application) => {
  courseCtrl(app);
  coursesCtrl(app);
  mainCtrl(app);
  mailerCtrl(app);
  projectsCtrl(app);
  aboutUsCtrl(app);
  sitemapCtrl(app);
};
