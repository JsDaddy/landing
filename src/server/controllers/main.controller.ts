import * as express from 'express';
import { StaticContentModel } from '../models/static_content.model';
import { UserModel } from '../models/user.model';
import {PortfolioModel} from "../models/portfolio.model";

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const users: any[] = await new UserModel().getUsers('member');
        const mainContent: IHashMap = await new StaticContentModel().getContentHashMap([
          'mainHead',
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
        mainContent.head = mainContent.mainHead.content;
        mainContent.portfolio.content = await new PortfolioModel().getContent();
        console.log(mainContent);
        return res.render('content/main', mainContent);
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

};
