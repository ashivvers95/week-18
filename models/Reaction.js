const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
    // type: Schema.Types.ObjectId,
    // default: new ObjectId
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => getDate(createdAtVal)
  }
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id:false
}
);

//This will not be a model, but rather will be used as 
//the reaction field's sub-document schema in the Thought model.

const Reaction = model('Reaction', ReactionSchema);

module.exports = Reaction;