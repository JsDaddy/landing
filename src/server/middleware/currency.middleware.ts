import { NextFunction, Request, Response } from 'express';
// import { logger } from './../main';

export const addCurrencyRate = (app: any) => {
  return async (req: Request, _res: Response, next: NextFunction): Promise<void> => {
    try {
      const nbuRate: string = app.get('config').get('nbu_rate');
      const currency = await app.get('http').get(nbuRate);
      req.params.currency = currency.data[0].rate;
      return next();
    } catch (err) {
      // logger.log('error', err);
      return next(err);
    }
  };
};
