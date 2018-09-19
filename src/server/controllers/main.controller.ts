import * as express from 'express';
import {MainPageModel} from '../models/main-page.model';
import {StaticContentModel} from '../models/static_content.model';
// import { WebDevelopmentModel } from '../models/web-development.model';
// import {logger} from './../main';

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const mainContent: IHashMap = await new StaticContentModel().getContentHashMap([
          {query: 'mainHead', replace: 'head', rewrite: true},
          'mainMenu',
          'mainPage',
          'webDevelopment',
          'technologies',
          'footer',
        ]);
        mainContent.mainPage = await new MainPageModel().getContent({name: 'mainPage'});
        // mainContent.webDevelopment = await new WebDevelopmentModel().getContent({name: 'webDevelopment'});
        return res.render('content/main', mainContent);
      } catch (err) {
        // logger.log('error', err);
        return res.render(`content/error-en`);
      }
    },
  );
};
