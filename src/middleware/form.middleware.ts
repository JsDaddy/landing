import { NextFunction, Request, Response } from 'express';
import { FormModel } from '../models/form.model';

export const formMiddleware = (section: string) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO lang
      const query: {section: string, lang?: string } = { section, lang: 'en' };
      const form = await new FormModel().getForm(query);
      req.params.form = form;
      return next();
    } catch (err) {
      // tslint:disable-next-line
      console.log(req, res);
      res.status(400);
      return next(err);
    }
  };
};
