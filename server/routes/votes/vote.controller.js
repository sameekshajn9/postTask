const mongoose = require('mongoose');
const Vote = require('./vote.model');
const ObjectID = mongoose.Types.ObjectId;

const voteTask = async (req, res) => {
  try {
    const { id, userId } = req.body;

    Vote.findOne({ task: ObjectID(id) })
      .then(async res => {
        if (res) {
          const users = res.users;
          const updatedUsers = users.push(userId);
          await Vote.updateOne(
            { task: ObjectID(id) },
            {
              $push: { users: updatedUsers }
            }
          );
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
