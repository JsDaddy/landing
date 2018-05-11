import * as bodyParser from 'body-parser';
import * as  cors from 'cors';
import { Application } from 'express';

export const appConf: (app: Application) => void = async (app: Application) => {
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({
    extended: false,
    limit: '50mb',
  }));
  app.use(cors());
};
