import * as express from 'express';
import { PortfolioModel } from '../models/portfolio.model';
import { StaticContentModel } from '../models/static_content.model';
import { UserModel } from '../models/user.model';
import { logger } from './../main';

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const users: any[] = await new UserModel().getUsers('member');
        const mainContent: IHashMap = await new StaticContentModel().getContentHashMap([
          { query: 'mainHead', replace: 'head', rewrite: true },
          'mainMenu',
          'mainBanner',
          'services',
          'technologies',
          'advantagesCompany',
          'aboutCompany',
          'contacts',
          'team',
          'footer',
          'opensource',
          'portfolio',
        ]);
        mainContent.team.content = users;
        mainContent.portfolio.content = await new PortfolioModel().getContent();
        return res.render('content/main', mainContent);
      } catch (err) {
        logger.log('error', err);
        return res.render(`content/error-en`);
      }
    },
  );

};
