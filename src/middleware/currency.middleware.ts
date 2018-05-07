// import * as axios from 'axios';
// import * as config from 'config';
import { NextFunction, Request, Response } from 'express';
// import { AdvantagesModel } from '../models/advantages.model';

export const addCurrencyRate: (req: Request, res: Response, next: NextFunction) => void =
async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    // const nbuRate: string = config.get('nbu_rate');

    // let currency: string = await axios(nbuRate)
    // const advantages = await new AdvantagesModel().getAdvantages({ section: 'main' });
    // req.params.advantages = advantages;
    return next();
  } catch (err) {
    // tslint:disable-next-line
    console.log(req, res);
    res.status(400);
    return next(err);
  }
};
