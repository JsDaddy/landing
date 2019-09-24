import * as express from 'express';
import { FooterModel } from '../models/footer.model';
import { HeaderModel } from '../models/header.model';
import { MobileDevelopmentModel } from '../models/mobile-development.model';
import { ProjectsNewModel } from '../models/projects.model';
import { StaticContentModel } from '../models/static_content.model';
import { TechnologiesModel } from '../models/technologies.model';

export const mobileDevelopmentCtrl = (app: express.Application) => {
    app.get(
        '/mobile-development',
        async (_req: express.Request, res: express.Response) => {
            try {
                const mobileDevelopmentContent: IHashMap = await new StaticContentModel().getContentHashMap([
                    { query: 'mainHead', replace: 'head', rewrite: true },
                    'headerMenu',
                    'mobileDevelopment',
                    'technologies',
                    'completeProjects',
                    'footerNew',
                ]);
                mobileDevelopmentContent.mobileDevelopment =
                    await new MobileDevelopmentModel().getContent({ name: 'mobileDevelopment' });
                mobileDevelopmentContent.technologies =
                    await new TechnologiesModel().getContent({ name: 'technologies' });
                mobileDevelopmentContent.completeProjects =
                    await new ProjectsNewModel().getContent({ name: 'completeProjects' });
                mobileDevelopmentContent.headerMenu = await new HeaderModel().getContent({ name: 'headerMenu' });
                mobileDevelopmentContent.footerNew = await new FooterModel().getContent({ name: 'footerNew' });
                return res.render('content/mobile-development', mobileDevelopmentContent);
            } catch (err) {
                return res.render(`content/error-en`);
            }
        },
    );
};
