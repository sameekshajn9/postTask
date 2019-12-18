const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let taskSchema = new mongoose.Schema({
  text: { type: String, default: null },
  posted_date: { type: Date, default: null },
  votes: [{ type: Schema.Types.ObjectId, ref: 'vote' }]
});

module.exports = mongoose.model('task', taskSchema);
