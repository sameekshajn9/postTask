const express = require('express');
// const database = require('./database');

const PORT = 3000;
const app = express();
require('./routes')(app);

app.listen(PORT, () => {
  console.log('Started listening on port 3000');
});
