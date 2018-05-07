import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const advantagesSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('Advantages', advantagesSchema, 'advantages');
