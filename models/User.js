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
    unique: true,
    validate: {
      validator: function(v) {
        return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      },
      message: props => `${props.value} is not a valid email!`
    },
    required: [true, 'User phone email required']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
},
{
  toJSON: {
    virtuals: true,
  },
  id: false

});

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length;
  //length of the user's friends array field on query
})

const User = model('User', UserSchema);

module.exports = User;