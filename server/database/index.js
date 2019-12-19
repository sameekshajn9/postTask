const mongoose = require('mongoose');
const config = require('./config');

// Exit application on error
mongoose.connection.on('error', err => {
  console.log(`MongoDB connection error: ${err}`);

  // process.exit(-1)
});

const connectWithRetry = () => {
  mongoose
    .connect(config.url, { useNewUrlParser: true })
    .then(res => {
      console.log('connected to DB');
    })
    .catch(err => {
      console.log('MongoDB connection unsuccessful, retry after 5 seconds.');
      setTimeout(connectWithRetry, 5000);
    });
};

connectWithRetry();
