const user = require('./user');
const task = require('./task');
const vote = require('./vote');

module.exports = app => {
  app.use('/api/users', user);
  app.use('/api/tasks', task);
  app.use('/api/votes', vote);
};
