const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: new ObjectId
  },
  reactionBody: {
    type: String,
    required: true
    //280 character maximum
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
    //Use a getter method to format the timestamp on query
    //get: (createdAtVal) => dateFormat(createdAtVal)
  }
});

//This will not be a model, but rather will be used as 
//the reaction field's sub-document schema in the Thought model.

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;