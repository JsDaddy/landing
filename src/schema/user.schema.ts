import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const userSchema: mongoose.Schema = new Schema({
  firstName: String,
  lastName: String,
  linkenIn: String,
  photo: String,
  position: String,
  roles: Object,
});

mongoose.model('User', userSchema, 'user');
