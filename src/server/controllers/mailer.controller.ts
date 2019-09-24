import * as config from 'config';
import * as express from 'express';
import { MailerService } from '../services/mailer.service';
const copyEmail: string = config.get('copyEmail');

export const mailerCtrl = (app: express.Application) => {
  app.post(
    '/mail/contacts',
    async (req: express.Request, res: express.Response) => {
      try {
        await new MailerService().sendMail({ copyEmail, ...req.body }, 'copy');
        return res.send(`<div> Name: ${req.body.name} </div>`);
      } catch (err) {
        return res.json({ message: {ru: 'Что-то пошло не так', en: 'Something went wrong' }, type: 'Error' });
      }
    },
  );

};
