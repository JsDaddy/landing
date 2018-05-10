import * as express from 'express';
import { StaticContentModel } from '../models/static_content.model';

export function coursesCtrl(app: express.Application) {
  app.get(
    '/:lang/courses',
    async (req: express.Request, res: express.Response) => {
      try {
        const coursesContent: HashMap =
          await new StaticContentModel().getContentHashMap(['coursesBanner'], req.params.lang);
        return res.render('content/courses', coursesContent);
      } catch (err) {
        return res.render('content/error');
      }
    },
  );

  app.get(
    '/:lang/courses/:id',
    async (_req: express.Request, res: express.Response) => res.json({ data: 'Success' }),
  );
}
