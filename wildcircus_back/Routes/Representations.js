const express = require('express');
const router = express.Router();
const connection = require('../config')

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

router.get('/', function (req, res) {
  connection.query('SELECT * FROM representation', function (err, result) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(result)
    };
  })
});

module.exports = router;