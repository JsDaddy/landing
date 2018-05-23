import * as mongoose from 'mongoose';

const Schema: typeof mongoose.Schema = mongoose.Schema;
const userSchema: mongoose.Schema = new Schema({
  firstName: Object,
  lastName: Object,
  linkenIn: String,
  photo: String,
  position: String,
  roles: Object,
});

mongoose.model('User', userSchema, 'user');
