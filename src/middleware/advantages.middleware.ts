import { NextFunction, Request, Response } from 'express';
import { AdvantagesModel } from '../models/advantages.model';

export const advantagesMiddleware: (req: Request, res: Response, next: NextFunction) => void =
async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
  try {

    req.params.advantages = await new AdvantagesModel().getContent({ lang: req.params.lang });
    return next();
  } catch (err) {
    // tslint:disable-next-line
    console.log(err);
    return next(err);
  }
};
