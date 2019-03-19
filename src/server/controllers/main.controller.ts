import * as express from 'express';
import { AboutUsModel } from '../models/about-us.model';
import { FooterModel } from '../models/footer.model';
import {HeaderModel} from '../models/header.model';
import {MainPageModel} from '../models/main-page.model';
import {StaticContentModel} from '../models/static_content.model';
import { TechnologiesModel } from '../models/technologies.model';
// import {logger} from './../main';

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const mainContent: IHashMap = await new StaticContentModel().getContentHashMap([
          {query: 'mainHead', replace: 'head', rewrite: true},
          'headerMenu',
          'mainPage',
          'technologies',
          'aboutCompany',
          'footerNew',
        ]);
        mainContent.headerMenu = await new HeaderModel().getContent({name: 'headerMenu'});
        mainContent.technologies = await new TechnologiesModel().getContent({name: 'technologies'});
        mainContent.aboutCompany = await new AboutUsModel().getContent({name: 'aboutCompany'});
        mainContent.mainPage = await new MainPageModel().getContent({name: 'mainPage'});
        mainContent.footerNew = await new FooterModel().getContent({name: 'footerNew'});
        return res.render('content/main', mainContent);
      } catch (err) {
        // logger.log('error', err);
        return res.render(`content/error-en`);
      }
    },
  );
};
