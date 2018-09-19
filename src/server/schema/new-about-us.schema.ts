import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const newAboutUsSchema: mongoose.Schema = new Schema ({
    name: String,
    // tslint:disable-next-line:object-literal-sort-keys
    hidden: Boolean,
    lang: String,
    title: String,
    content: Object,
});

mongoose.model('NewAboutUs', newAboutUsSchema, 'new-about-us');
// #{newAboutCompany.title}
