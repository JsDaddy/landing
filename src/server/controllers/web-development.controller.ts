import * as express from 'express';
import { FooterModel } from '../models/footer.model';
import { HeaderModel } from '../models/header.model';
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
          'headerMenu',
          'webDevelopment',
          'footerNew',
        ]);
        webDevelopmentContent.webDevelopment = await new WebDevelopmentModel().getContent({name: 'webDevelopment'});
        webDevelopmentContent.headerMenu = await new HeaderModel().getContent({name: 'headerMenu'});
        webDevelopmentContent.footerNew = await new FooterModel().getContent({name: 'footerNew'});
        return res.render('content/web-development', webDevelopmentContent);
      } catch (err) {
        // logger.log('error', err);
        return res.render(`content/error-en`);
      }
    },
  );
};
