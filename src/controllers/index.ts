import { Application } from 'express';
import {coursesCtrl} from './courses.controller';
import { mainCtrl } from './main.controller';

export const controllers: (app: Application) => void = (app: Application) => {
  mainCtrl(app);
  coursesCtrl(app);
};
