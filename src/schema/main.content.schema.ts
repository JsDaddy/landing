import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const mainContentSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('MainContent', mainContentSchema, 'main');
