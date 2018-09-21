import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const projectsSchema: mongoose.Schema = new Schema ({
    name: String,
    projects: Object,
    subText: String,
    subTitle: String,
    title: String,
});

mongoose.model('Projects', projectsSchema, 'new_projects');
