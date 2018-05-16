import * as express from 'express';
import {StaticContentModel} from '../models/static_content.model';

export const caseCtrl = (app: express.Application) => {
  app.get(
    '/:lang/case',
      async (req: express.Request, res: express.Response) => {
          const { lang } = req.params;
          try {
              const caseContent: IHashMap = await new StaticContentModel().getContentHashMap([
                  'mainHead',
                  'mainMenu',
                  'mainBanner',
                  'contacts',
                  'footer',
              ], lang);
              return res.render('content/case', caseContent);
          } catch (err) {
              return res.render('content/error');
          }
      },
  );
};
