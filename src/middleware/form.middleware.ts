import { NextFunction, Request, Response } from 'express';
import { UsersModel } from '../models/users.model';

export const formMiddleware = (section: string) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO lang
      const query: {section: string, lang?: string } = { section, lang: 'en' };
      const form = await new UsersModel().getForm(query);
      req.params.form = form;
      return next();
    } catch (err) {
      // tslint:disable-next-line
      console.log(err);
      return next(err);
    }
  };
};
