import * as express from 'express';
import { CourseParticipentsModel } from '../models/courseParticipents.model';
import { ProjectParticipentsModel } from '../models/projectParticipents.model';
import { MailerService } from '../services/mailer.service';
import { logger } from './../main';

export const mailerCtrl = (app: express.Application) => {
  app.post(
    '/mail/contacts',
    async (req: express.Request, res: express.Response) => {
      try {
        await new MailerService().sendMail(req.body, 'contacts');
        await new MailerService().sendMail({ email: 'info@jsdaddy.io'}, 'copy');

        await new ProjectParticipentsModel().createParticipent(req.body);

        return res.json({ message: {ru: 'Спасибо', en: 'Email sent' }, type: 'Success' });
      } catch (err) {
        logger.log('error', err);
        return res.json({ message: {ru: 'Что-то пошло не так', en: 'Something went wrong' }, type: 'Error' });
      }
    },
  );

  app.post(
    '/mail/course',
    async (req: express.Request, res: express.Response) => {
      try {
        await new MailerService().sendMail(req.body, 'course', req.headers['content-language']);
        await new MailerService().sendMail({ email: 'info@jsdaddy.io'}, 'copy');

        await new CourseParticipentsModel().createParticipent(req.body);

        return res.json({ message: {ru: 'Спасибо', en: 'Email sent' }, type: 'Success' });
      } catch (err) {
        logger.log('error', err);
        return res.json({ message: {ru: 'Что-то пошло не так', en: 'Something went wrong' }, type: 'Error' });
      }
    },
  );

};
