import * as express from 'express';
import { StaticContentModel } from '../models/static_content.model';
import { PortfolioModel } from "../models/portfolio.model";

export const caseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/projects/:project',
      async (req: express.Request, res: express.Response) => {
        const { lang, project } = req.params;
        try {
          const caseContent: IHashMap = await new StaticContentModel().getContentHashMap([
            'mainHead',
            'mainMenu',
            'mainBanner',
            'contacts',
            'footer',
            'projectBanner',
            'portfolio',
            'aboutProject',
            'technicalInfo',
          ], lang);

          const oneProject = await new PortfolioModel().getProject({name: project});
          caseContent['projectBanner'].content = {...caseContent['projectBanner'].content , ...oneProject};
          caseContent['aboutProject'].content = {...caseContent['aboutProject'].content , ...oneProject};
          caseContent['technicalInfo'].content = {...caseContent['technicalInfo'].content , ...oneProject};

          // console.log( caseContent['technicalInfo']);
          return res.render('content/case', caseContent);
        } catch (err) {
          console.log(err);
          return res.render('content/error-en');
        }
      },
  );
};
