import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const mainPageSchema: mongoose.Schema = new Schema({
  advantages: Object,
  banner: Object,
  name: String,
  process: Object,
  services: Object,
  technologies: Object,
  testimonials: Object,
});

mongoose.model('MainPage', mainPageSchema, 'new_main_page');
