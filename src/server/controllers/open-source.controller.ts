import * as express from 'express';
import {EventsModel} from '../models/events.model';
import {StaticContentModel} from '../models/static_content.model';

export const communityCtrl = (app: express.Application) => {
    app.get(
        '/open-source',
        async (req: express.Request, res: express.Response) => {
            const {lang, project} = req.params;
            const head = `${project}Head`;
            try {
                const aboutUsContent: IHashMap = await new StaticContentModel().getContentHashMap([
                    { query: 'communityHead', replace: 'head', rewrite: true },
                    { query: head, replace: 'head', rewrite: true },
                    'mainHead',
                    'mainMenu',
                    'mainBanner',
                    'opensource',
                    'events',
                    'contacts',
                    'footer',
                ], lang);
                aboutUsContent.events.content = await new EventsModel().getContent();
                return res.render('content/community', aboutUsContent);
            } catch (err) {
                return res.render('content/error-en');
            }
        },
    );
};
