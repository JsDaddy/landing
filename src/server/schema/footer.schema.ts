import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const footerSchema: mongoose.Schema = new Schema({
  content: Object,
  footer: Object,
});

mongoose.model('Footer', footerSchema, 'new_footer');
