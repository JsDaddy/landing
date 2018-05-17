import * as express from 'express';
import { PortfolioModel } from '../models/portfolio.model';
import { StaticContentModel } from '../models/static_content.model';

export const projectsCtrl = (app: express.Application) => {
  app.get(
    '/projects/:project',
      async (req: express.Request, res: express.Response) => {
        const { lang, project } = req.params;
        const head = `${project}Head`;
        try {
          const projectsContent: IHashMap = await new StaticContentModel().getContentHashMap([
            {
              query: head,
              replace: 'head',
              rewrite: true,
            },
            'aboutProject',
            'contacts',
            'footer',
            'mainHead',
            'mainMenu',
            'mainBanner',
            'portfolio',
            'projectBanner',
            'technicalInfo',
            'workProcess',
          ], lang);
          const oneProject = await new PortfolioModel().getProject({name: project});
          projectsContent.projectBanner.content = {...projectsContent.projectBanner.content , ...oneProject};
          projectsContent.aboutProject.content = {...projectsContent.aboutProject.content , ...oneProject};
          projectsContent.technicalInfo.content = {...projectsContent.technicalInfo.content , ...oneProject};
          projectsContent.workProcess.content = {...projectsContent.workProcess.content , ...oneProject};

          return res.render('content/projects', projectsContent);
        } catch (err) {
          return res.render('content/error-en');
        }
      },
  );
};
