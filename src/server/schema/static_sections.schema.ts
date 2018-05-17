import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const staticContentSchema: mongoose.Schema = new Schema({
  button: Object,
  content: Object,
  hidden: Boolean,
  lang: String,
  name: String,
  title: String,
});

mongoose.model('StaticContent', staticContentSchema, 'static_sections');
