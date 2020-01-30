const express = require('express')
const app = express()
const representations = require('./Routes/Representations');
const reservations = require('./Routes/Reservations');
const bodyParser = require ('body-parser')
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/representations', representations);
app.use('/reservations', reservations);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
