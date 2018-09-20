import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const headerSchema: mongoose.Schema = new Schema ({
    btn: String,
    logo: String,
    nav: Object,
});

mongoose.model('Header', headerSchema, 'new_header');
