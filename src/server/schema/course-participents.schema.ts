import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const courseParticipentsSchema: mongoose.Schema = new Schema({
  course: String,
  email: String,
  name: String,
  phone: String,
  text: String,
});

mongoose.model('CourseParticipents', courseParticipentsSchema, 'course_participents');
