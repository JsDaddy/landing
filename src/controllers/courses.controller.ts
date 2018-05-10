import * as express from 'express';

export function coursesCtrl(app: express.Application) {

  app.get(
    '/:lang/courses',
    async (_req: express.Request, res: express.Response) => res.json({data: 'Success'}),
  );

  app.get(
    '/:lang/courses/:id',
    async (_req: express.Request, res: express.Response) => res.json({data: 'Success'}),
  );
}
