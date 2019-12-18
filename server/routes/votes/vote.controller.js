const mongoose = require('mongoose');
const Vote = require('./vote.model');
const ObjectID = mongoose.Types.ObjectId;

const voteTask = async (req, res) => {
  try {
    const { id, userId } = req.body;

    Vote.findOne({ task: ObjectID(id) })
      .then(res => {
          if (res) {
        } else {
          await new Vote({ task: ObjectID(id), users: [userId], count: 0 });
        }
        return res.json({
          status: 200,
          message: 'Post Liked Successfully'
        });
      })
      .catch(err => res.json({ status: 400, message: err }));
  } catch (exception) {
    res.json({ status: 400, message: exception });
  }
};

module.exports.voteTask = voteTask;
