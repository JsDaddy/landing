import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const courseSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('Course', courseSchema, 'new_course');
