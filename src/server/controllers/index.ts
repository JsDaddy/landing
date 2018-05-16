import { Application } from 'express';
import { caseCtrl } from './case.controller';
import { courseCtrl } from './course.controller';
import { coursesCtrl } from './courses.controller';
import { mailerCtrl } from './mailer.controller';
import { mainCtrl } from './main.controller';

export const controllers: (app: Application) => void = (app: Application) => {
  mainCtrl(app);
  courseCtrl(app);
  coursesCtrl(app);
  mailerCtrl(app);
  caseCtrl(app);
};
