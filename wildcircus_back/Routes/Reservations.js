var express = require('express');
var router = express.Router();
const connection = require('../config')

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// define the home page route
router.get('/', function(req, res) {
  res.send('reservations');
});

router.post('/', function (req, res) {
  if (req.body){
const {placeNumber, city, date, hour }=req.body
if (!placeNumber || !city || !date || !hour){
  res.status(400)
  res.send('missing information')
}else{
  connection.query(`UPDATE representation SET places_dispo = places_dispo - ? 
    WHERE ville=? AND date_representation = ? AND heure_representation = ?`,[placeNumber,city,date,hour],(err,result)=>{
      if(err){
        res.sendStatus(500)
        console.log(result)
      }else{
        res.sendStatus(200)
      }
    })
  }}else {
    res.sendStatus(400)
  }
})


module.exports = router;