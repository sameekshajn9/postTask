const express = require('express');
const database = require('./database');
const expressValidator = require('express-validator');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(expressValidator());

require('./routes')(app);

app.listen(PORT, () => {
  console.log('Started listening on port 3000');
});
