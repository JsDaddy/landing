import { Application } from 'express';
import { mainCtrl } from './main.controller';

export const controllers: (app: Application) => void = (app: Application) => {
  mainCtrl(app);
};