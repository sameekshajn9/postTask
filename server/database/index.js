const mongoose = require('mongoose');
const config = require('./config');

mongoose
  .connect(config.url, { useNewUrlParser: true })
  .then(res => {
    console.log('connected to DB');
  })
  .catch(err => console.log(err, 'error while creating DB'));
