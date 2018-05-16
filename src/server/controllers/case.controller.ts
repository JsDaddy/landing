import * as express from 'express';
import { PortfolioModel } from '../models/portfolio.model';
import { StaticContentModel } from '../models/static_content.model';

export const caseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/projects/:project',
      async (req: express.Request, res: express.Response) => {
        const { lang, project } = req.params;
        try {
          const caseContent: IHashMap = await new StaticContentModel().getContentHashMap([
            'aboutProject',
            'contacts',
            'footer',
            'mainHead',
            'mainMenu',
            'mainBanner',
            'portfolio',
            'projectBanner',
            'technicalInfo',
          ], lang);

          const oneProject = await new PortfolioModel().getProject({name: project});
          caseContent.projectBanner.content = {...caseContent.projectBanner.content , ...oneProject};
          caseContent.aboutProject.content = {...caseContent.aboutProject.content , ...oneProject};
          caseContent.technicalInfo.content = {...caseContent.technicalInfo.content , ...oneProject};
          return res.render('content/case', caseContent);
        } catch (err) {
          return res.render('content/error-en');
        }
      },
  );
};
