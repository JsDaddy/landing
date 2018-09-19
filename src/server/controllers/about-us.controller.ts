import * as express from 'express';
import {AboutUsModel} from '../models/about-us.model';
import {StaticContentModel} from '../models/static_content.model';
import {logger} from './../main';

export const aboutUsCtrl = (app: express.Application) => {
    app.get(
        '/about-us',
        async (_req: express.Request, res: express.Response) => {
            try {
                const aboutUsContent: IHashMap = await new StaticContentModel().getContentHashMap([
                    {query: 'mainHead', replace: 'head', rewrite: true},
                    'aboutCompany',
                    'team',
                    'contacts',
                    'footer',
                ]);
                aboutUsContent.aboutCompany = await new AboutUsModel().getContent({name: 'aboutCompany'});
                return res.render('content/about-us', aboutUsContent);
            } catch (err) {
                logger.log('error', err);
                return res.render('content/error-en');
            }
        },
    );
};
