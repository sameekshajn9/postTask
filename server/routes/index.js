const user = require('./users');
const task = require('./tasks');
const vote = require('./votes');

module.exports = app => {
  app.use('/api/users', user);
  app.use('/api/tasks', task);
  app.use('/api/votes', vote);
};
