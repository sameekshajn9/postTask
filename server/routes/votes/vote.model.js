const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new mongoose.Schema({
  count: { type: String, default: null },
  users: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  task: { type: Schema.Types.ObjectId, ref: 'task' }
});

module.exports = mongoose.model('vote', voteSchema);
