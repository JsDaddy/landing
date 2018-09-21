import {Application} from 'express';
import {aboutUsCtrl} from './about-us.controller';
import {mailerCtrl} from './mailer.controller';
import {mainCtrl} from './main.controller';
import {communityCtrl} from './open-source.controller';
import {projectsCtrl} from './projects.controller';
import {sitemapCtrl} from './sitemap.controller';
import { webDevelopmentCtrl } from './web-development.controller';

export const controllers: (app: Application) => void = (app: Application) => {
    communityCtrl(app);
    mainCtrl(app);
    mailerCtrl(app);
    projectsCtrl(app);
    aboutUsCtrl(app);
    sitemapCtrl(app);
    webDevelopmentCtrl(app);
};
