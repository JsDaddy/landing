import * as express from 'express';
import {EventsModel} from '../models/events.model';
import {PortfolioModel} from '../models/portfolio.model';
import {StaticContentModel} from '../models/static_content.model';
import {UserModel} from '../models/user.model';
import {logger} from './../main';

export const mainCtrl = (app: express.Application) => {
  app.get(
    '/',
    async (_req: express.Request, res: express.Response) => {
      try {
        const users: any[] = await new UserModel().getUsers('member');
        const mainContent: IHashMap = await new StaticContentModel().getContentHashMap([
          {query: 'mainHead', replace: 'head', rewrite: true},
          'events',
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
          'businessOptions',
          'testimonials',
        ]);
        mainContent.team.content = users;
        mainContent.events.content = await new EventsModel().getContent();
        mainContent.portfolio.content = await new PortfolioModel().getContent();
        mainContent.portfolio.content = mainContent.portfolio.content.map((project: any) => {
          return {...project, href: `/projects/${project.name}`};
        });
        return res.render('content/main', mainContent);
      } catch (err) {
        logger.log('error', err);
        return res.render(`content/error-en`);
      }
    },
  );
};
