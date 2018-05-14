import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const portfolioSchema: mongoose.Schema = new Schema({
  background: String,
  duration: String,
  hidden: Boolean,
  lang: String,
  link: String,
  name: String,
  shortdescription: String,
  technologies: [String],
  title: String,
});

mongoose.model('Projects', portfolioSchema, 'projects');
