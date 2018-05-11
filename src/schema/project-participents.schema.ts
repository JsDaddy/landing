import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const projectParticipentsSchema: mongoose.Schema = new Schema({
  name: String,
  surname: String,
  text: String,
});

mongoose.model('ProjectParticipents', projectParticipentsSchema, 'project_participents');
