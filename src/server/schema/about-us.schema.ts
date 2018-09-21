import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const aboutUsSchema: mongoose.Schema = new Schema ({
    head: Object,
    main: Object,
    map: String,
    name: String,
    team: Object,
    title: String,
});

mongoose.model('AboutUs', aboutUsSchema, 'new_about_us');
