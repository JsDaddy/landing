import * as express from 'express';
import { connectToDb } from './config/db.config';

const app = express();

import '../src/schema';
connectToDb()
import {controllers} from './controllers';

controllers(app);

app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('/', (_req, res: express.Response) => {
  return res.render('main',{title:'MAIN'});
});
app.get('*', (_req, res: express.Response) => {
  return res.render('error',{title:'MAIN'});
});




app.listen(3000);