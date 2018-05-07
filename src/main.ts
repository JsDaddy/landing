import * as express from 'express';
import { connectToDb } from './config/db.config';

const app = express();

import '../src/schema';
import {controllers} from './controllers';

connectToDb();
controllers(app);

app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('*', (_req, res: express.Response) => {
  const errrorContentData = { back: 'javascript:history.back()' };
  return res.render('error', errrorContentData);
});

app.listen(3000);
