import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
export const messageSchema: mongoose.Schema = new Schema ({
    date: String,
    email: String,
    message: String,
    name: String,
});

mongoose.model('Messages', messageSchema, 'new_message');
