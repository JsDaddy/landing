import { NextFunction, Request, Response } from 'express';
import { AdvantagesModel } from '../models/advantages.model';

export const advantagesMiddleware: (req: Request, res: Response, next: NextFunction) => void =
async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const advantages = await new AdvantagesModel().getAdvantages({ section: 'main' });
    req.params.advantages = advantages;
    return next();
  } catch (err) {
    // tslint:disable-next-line
    console.log(req, res);
    res.status(400);
    return next(err);
  }
};
