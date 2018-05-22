import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const projectParticipentsSchema: mongoose.Schema = new Schema({
  email: String,
  name: String,
  text: String,
  timestamp: {type: Date, default: Date.now },
});

mongoose.model('ProjectParticipents', projectParticipentsSchema, 'project_participents');
