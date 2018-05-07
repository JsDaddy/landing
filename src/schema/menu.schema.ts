import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const menuSchema: mongoose.Schema = new Schema({
  btnHeader: [
    {
      text: String,
    },
  ],
  lang: String,
  menu: [
    {
      link: String,
      title: String,
    },
  ],
  section: String,
  social: [
    {
      icon: String,
      link: String,
      soc: String,
    },
  ],
});
mongoose.model('Menu', menuSchema, 'menu');
