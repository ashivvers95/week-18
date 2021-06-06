const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => getDate(createdAtVal)
  },
  username: {
    type: String,
    required: true
  },
  reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction'
      }
  ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id:false
});

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
    //length of the thought's reactions array field on query
})

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;