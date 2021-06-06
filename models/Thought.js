const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true
    //Must be between 1 and 280 characters
  },
  createdAt: {
    type: Date,
    default: Date.now
    // get: Use a getter method to format the timestamp on query
  },
  username: {
    type: String,
    required: true
  },
  reactions: [
      {
        //Array of nested documents created with the reactionSchema
      }
  ]
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
    //length of the thought's reactions array field on query
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;