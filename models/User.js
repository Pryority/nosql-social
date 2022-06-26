const { Schema, model } = require('mongoose');

const UserSchema = new Schema(
  {
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
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought'
      }
    ],

    friends: [],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false
  }
);

// get total count of comments and replies on retrieval
UserSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.length;
});

const User = model('User', UserSchema);

module.exports = User;
