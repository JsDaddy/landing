import { NextFunction, Request, Response } from 'express';
import { MenuModel } from '../models/menu.model';

export const menuMiddleware: (req: Request, res: Response, next: NextFunction) => void = 
async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const menu = await new MenuModel().getMenu({ section: 'main' });
    req.params['header'] = menu;
    return next();
  } catch(err) {
    console.log(req, res);
    res.status(400);
    return next(err);
  }
};
