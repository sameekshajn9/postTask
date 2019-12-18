const mongoose = require('mongoose');
const Task = require('./task.model');
const ObjectID = mongoose.Types.ObjectId;

const createTask = async (req, res) => {
  try {
    const { title } = req.body;

    const data = {
      title,
      posted_date: new Date().toUTCString(),
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

const getAllTasks = async (req, res) => {
  try {
    new Task(data)
      .find()
      .populate({
        path: 'vote'
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
module.exports.getAllTasks = getAllTasks;
