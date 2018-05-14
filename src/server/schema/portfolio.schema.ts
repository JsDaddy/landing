import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const portfolioSchema: mongoose.Schema = new Schema({
  name: String,
  hidden: Boolean,
  lang: String,
  title: String,
  link: String,
  duration: String,
  shortdescription: String,
  background: String,
  technologies: [String]
});

mongoose.model('Projects', portfolioSchema, 'projects');
