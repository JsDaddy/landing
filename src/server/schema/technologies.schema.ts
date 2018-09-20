import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const technologiesSchema: mongoose.Schema = new Schema ({
    list: Object,
    name: String,
});

mongoose.model('Technologies', technologiesSchema, 'technologies');
