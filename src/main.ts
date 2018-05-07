import axios from 'axios';
import * as config from 'config';
import * as express from 'express';

const app = express();
import '../src/schema';

import { connectToDb } from './config/db.config';
import { controllers } from './controllers';

connectToDb();
controllers(app);

app.set('config', config);
app.set('http', axios.create());
app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('*', (_req, res: express.Response) => res.render('content/error'));

app.listen(3000);
