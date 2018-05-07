import { NextFunction, Request, Response } from 'express';
import { MenuModel } from '../models/menu.model';

export const menuMiddleware = (section: string) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO add lang
      const { lang } = req.params;
      let query: any = { section };
      query = lang ? {
        ...query,
        lang,
      } : null;
      const menu = await new MenuModel().getMenu(query);
      menu.languages = req.params.languages;
      req.params.header = menu;
      return next();
    } catch (err) {
      return next(err);
    }
  };
};
