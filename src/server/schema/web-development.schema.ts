import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const webDevelopmentSchema: mongoose.Schema = new Schema({
  completeProjects: Object,
  stack: Object,
  webBanner: Object,
  webServices: Object,
  webSolution: String,
});

mongoose.model('WebDevelopment', webDevelopmentSchema, 'new_front_end_projects');
