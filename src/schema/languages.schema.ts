import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const languagesSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('Languages', languagesSchema, 'languages');
