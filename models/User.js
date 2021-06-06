const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trimmed: true
  },
  email: {
    type: String,
    required: true,
    unique: true
    //matching validation here?
  },
  thoughts: [
    {
      ref: 'Thought'
    }
  ],
  friends: [
    {
      ref: "User"
    }
  ]
});

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
  //length of the user's friends array field on query
})

const User = model('User', UserSchema);

module.exports = User;