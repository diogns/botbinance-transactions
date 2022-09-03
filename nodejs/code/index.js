const express = require('express');
const app = express();
const bodyParser = require('body-parser');
process.env.TZ = 'America/Lima';

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Listening on port 3000');
});