import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const staticContentSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('StaticContent', staticContentSchema, 'static_content');
