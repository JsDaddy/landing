import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const menuSchema: mongoose.Schema = new Schema({
  section : String,
  lang: String,
  menu: [
    {
      title: String,
      link: String
    }
  ],
  social: [
    {
      link: String,
      icon: String,
      soc: String
    }
  ],
  btnHeader: [
    {
      text: String
    }
  ]
});
mongoose.model('Menu', menuSchema, 'menu');
