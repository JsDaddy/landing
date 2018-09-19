import * as express from 'express';
import {StaticContentModel} from '../models/static_content.model';
import { WebDevelopmentModel } from '../models/web-development.model';
// import {logger} from './../main';

export const webDevelopmentCtrl = (app: express.Application) => {
  app.get(
    '/web-development',
    async (_req: express.Request, res: express.Response) => {
      try {
        const webDevelopmentContent: IHashMap = await new StaticContentModel().getContentHashMap([
          {query: 'mainHead', replace: 'head', rewrite: true},
          'mainMenu',
          'webDevelopment',
          'footer',
        ]);
        webDevelopmentContent.webDevelopment = await new WebDevelopmentModel().getContent({name: 'webDevelopment'});
        return res.render('content/web-development', webDevelopmentContent);
      } catch (err) {
        // logger.log('error', err);
        return res.render(`content/error-en`);
      }
    },
  );
};
