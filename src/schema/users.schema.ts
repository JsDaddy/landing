import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const userSchema: mongoose.Schema = new Schema({
  // TODO describe schema
});

mongoose.model('Users', userSchema, 'users');
