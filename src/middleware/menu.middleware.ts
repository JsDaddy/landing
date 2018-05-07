import { NextFunction, Request, Response } from 'express';
import { MenuModel } from '../models/menu.model';

export const menuMiddleware:
(section: string) => (req: Request, res: Response, next: NextFunction) => void = (section: string) => {
  return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      // TODO add lang
      const query: {section: string, lang?: string } = { section };
      const menu = await new MenuModel().getMenu(query);
      req.params.header = menu;
      return next();
    } catch (err) {
      res.status(400);
      return next(err);
    }
  };
};
