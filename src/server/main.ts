import axios from 'axios';
import * as compression from 'compression';
import * as config from 'config';
import * as express from 'express';
// import * as winston from 'winston';

// export const logger = new winston.Logger({
//   transports: [
//     new winston.transports.File({
//       filename: './logs/all-logs.log',
//       level: 'info',
//     }),
//   ],
// });

const app = express();
import './schema/index';

import { appConf } from './config/app.config';
import { connectToDb } from './config/db.config';
import { controllers } from './controllers';

connectToDb();
appConf(app);
controllers(app);

app.set('config', config);
app.set('http', axios.create());
app.use(compression());
app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('*', (req, res: express.Response) => {
  const urlLang = req.url.split('/')[1];
  const lang = app.get('config').get('langs').includes(urlLang) ? urlLang : 'en';
  return res.render(`content/error-${lang}`);
});

app.listen(3000);
