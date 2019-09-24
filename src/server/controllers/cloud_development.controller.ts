import * as express from 'express';
import { CloudDevelopmentModel } from '../models/cloud_development.model';
import { FooterModel } from '../models/footer.model';
import { HeaderModel } from '../models/header.model';
import { ProjectsNewModel } from '../models/projects.model';
import {StaticContentModel} from '../models/static_content.model';
import { TechnologiesModel } from '../models/technologies.model';

export const cloudDevelopmentCtrl = (app: express.Application) => {
  app.get(
    '/cloud-development',
    async (_req: express.Request, res: express.Response) => {
      try {
        const cloudDevelopmentContent: IHashMap = await new StaticContentModel().getContentHashMap([
          {query: 'mainHead', replace: 'head', rewrite: true},
          'headerMenu',
          'cloudDevelopment',
          'technologies',
          'completeProjects',
          'footerNew',
        ]);
        // tslint:disable-next-line:max-line-length
        cloudDevelopmentContent.cloudDevelopment = await new CloudDevelopmentModel().getContent({name: 'cloudDevelopment'});
        cloudDevelopmentContent.technologies = await new TechnologiesModel().getContent({name: 'technologies'});
        cloudDevelopmentContent.completeProjects = await new ProjectsNewModel().getContent({name: 'completeProjects'});
        cloudDevelopmentContent.headerMenu = await new HeaderModel().getContent({name: 'headerMenu'});
        cloudDevelopmentContent.footerNew = await new FooterModel().getContent({name: 'footerNew'});
        return res.render('content/cloud-development', cloudDevelopmentContent);
      } catch (err) {
        return res.render(`content/error-en`);
      }
    },
  );
};
