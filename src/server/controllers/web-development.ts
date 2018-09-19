import * as express from 'express';
import {StaticContentModel} from '../models/static_content.model';

export const webDevelopmentCtrl = (app: express.Application) => {
    app.get(
        '/web-development',
        async (req: express.Request, res: express.Response) => {
            const {lang, project} = req.params;
            const head = `${project}Head`;
            try {
                const webDevelopmentContent: IHashMap = await new StaticContentModel().getContentHashMap([
                    {
                    query: head,
                    replace: 'head',
                    rewrite: true,
                    },
                ], lang);
                return res.render('content/web-development', webDevelopmentContent);
            } catch (err) {
                return res.render('content/error-en');
            }
        },
    );
};
