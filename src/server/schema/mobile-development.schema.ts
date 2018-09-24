import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const mobileDevelopmentSchema: mongoose.Schema = new Schema({
  completeProjects: Object,
  mobileBanner: Object,
  mobileServices: Object,
  mobileSolution: String,
  stack: Object,
});

mongoose.model('MobileDevelopment', mobileDevelopmentSchema, 'mobile_development');
