import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const eventsSchema: mongoose.Schema = new Schema({
  event: [Array],
  hidden: Boolean,
  lang: String,
  name: String,
  title: String,
});

mongoose.model('Events', eventsSchema, 'events');
