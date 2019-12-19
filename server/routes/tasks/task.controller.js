const mongoose = require('mongoose');
const Task = require('./task.model');
const ObjectID = mongoose.Types.ObjectId;

const createTask = async (req, res) => {
  try {
    const { title, date } = req.body;

    const data = {
      title,
      posted_date: date,
      votes: []
    };

    new Task(data)
      .save()
      .then(res => {
        return res.json({
          status: 200,
          message: 'Task Posted Successfully.'
        });
      })
      .catch(err => res.json({ status: 400, message: err }));
  } catch (exception) {
    res.json({ status: 400, message: exception });
  }
};

const getAllPosts = async (req, res) => {
  try {
    Task.find()
      .populate({
        path: 'vote',
        populate: { path: 'user' }
      })
      .then(res => {
        const allTasks = JSON.parse(JSON.stringify(res));

        return res.json({
          status: 200,
          message: 'Tasks fetched Successfully.',
          allTasks
        });
      })
      .catch(err => res.json({ status: 400, message: err }));
  } catch (exception) {
    res.json({ status: 400, message: exception });
  }
};

module.exports.createTask = createTask;
module.exports.getAllPosts = getAllPosts;
