import * as express from 'express';
import {StaticContentModel} from '../models/static_content.model';
import {UserModel} from '../models/user.model';

export const aboutUsCtrl = (app: express.Application) => {
    app.get(
        '/about-us',
        async (req: express.Request, res: express.Response) => {
            const {lang, project} = req.params;
            const head = `${project}Head`;
            try {
                const users: any[] = await new UserModel().getUsers('member');
                const aboutUsContent: IHashMap = await new StaticContentModel().getContentHashMap([
                    { query: 'aboutUsHead', replace: 'head', rewrite: true },
                    {
                        query: head,
                        replace: 'head',
                        rewrite: true,
                    },
                    'mainHead',
                    'mainMenu',
                    'mainBanner',
                    'aboutCompany',
                    'team',
                    'contacts',
                    'footer',
                ], lang);
                aboutUsContent.team.content = users;
                return res.render('content/about-us', aboutUsContent);
            } catch (err) {
                return res.render('content/error-en');
            }
        },
    );
};
