import * as express from 'express';

const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.get('/', (_req, res: express.Response) => {
  return res.render('main',{title:'MAIN'});
});


app.listen(3000);