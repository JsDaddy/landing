import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const cloudDevelopmentSchema: mongoose.Schema = new Schema({
  cloudBanner: Object,
  cloudServices: Object,
  cloudSolution: Object,
  completeProjects: Object,
  stack: Object,
});

mongoose.model('CloudDevelopment', cloudDevelopmentSchema, 'cloud_server');
