import axios from 'axios';
import * as config from 'config';
import * as express from 'express';
import * as winston from 'winston';

export const logger = new winston.Logger({
  transports: [
      new winston.transports.File({
        filename: './logs/all-logs.log',
        level: 'info',
      }),
  ],
});

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
app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('*', (_req, res: express.Response) => {
  return res.render('content/error');
});

app.listen(3000);
