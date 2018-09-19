import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const webDevelopmentSchema: mongoose.Schema = new Schema({
  webBanner: Object,
  webServices: Object,
  webSolution: String,
  // tslint:disable-next-line:object-literal-sort-keys
  stack: Object,
  completeProjects: Object,
});

mongoose.model('WebDevelopment', webDevelopmentSchema, 'new_front_end_projects');
