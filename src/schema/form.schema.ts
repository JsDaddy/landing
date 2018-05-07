import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const formSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('FormModel', formSchema, 'form');
