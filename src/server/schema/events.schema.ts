import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const eventsSchema: mongoose.Schema = new Schema({
  hidden: Boolean,
  lang: String,
  name: String,
  event: [Array],
  title: String,
});

mongoose.model('Events', eventsSchema, 'events');
