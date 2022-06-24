const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trimmed: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trimmed: true
  },
  thoughts: [],
  friends: []
});

const User = model('User', UserSchema);

module.exports = User;
