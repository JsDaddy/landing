import * as compression from 'compression';
import * as config from 'config';
import * as express from 'express';
const app = express();
import './schema/index';

import { appConf } from './config/app.config';
import { connectToDb } from './config/db.config';
import { controllers } from './controllers';
// tslint:disable-next-line: no-var-requires
const browser = require('browser-detect');

connectToDb();
appConf(app);
controllers(app);

app.set('config', config);
app.use((_req, _res, next) => {
    const result = browser(_req.headers['user-agent']);
    if (result.name !== 'safari') {
     return compression()(_req, _res, next);
    }
    next();
});

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('*', (req, res: express.Response) => {
  const urlLang = req.url.split('/')[1];
  const lang = app
    .get('config')
    .get('langs')
    .includes(urlLang)
    ? urlLang
    : 'en';

  return res.render(`content/error-${lang}`);
});

app.listen(3000);
