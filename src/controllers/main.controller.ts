import { Application } from 'express';
import { menuMiddleware } from '../middleware/menu.middleware';
import { MainContentModel } from '../models/main.content.model';
import { formMiddleware } from './../middleware/form.middleware';
import { consumer } from './consumer';

export const mainCtrl = (app: Application) => {
  app.get(
    '/',
    menuMiddleware('main'),
    formMiddleware('main'),
    consumer('content/main', MainContentModel),
  );
};
