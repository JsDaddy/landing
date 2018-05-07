import * as express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('/', (_req, res: express.Response) => {
  return res.render('main', {});
});
app.get('*', (_req, res: express.Response) => {
  const errrorContentData = { back: 'javascript:history.back()' };
  return res.render('error', errrorContentData);
});

app.listen(3000);
