import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const coursesSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('Courses', coursesSchema, 'courses');
