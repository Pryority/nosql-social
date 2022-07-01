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
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'Thought' }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "User"
    }]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false
  }
);

UserSchema.virtual('thoughtCount').get(function () {
  return this.thoughts.reduce((total, comment) => total + comment.replies.length + 1, 0);
});


const User = model('User', UserSchema);

module.exports = User;
