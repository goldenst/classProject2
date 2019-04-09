
var db = require ('../models')

 function driverSats (req, res) {
  db.DriverSats.findAll().then(function (dbDriverSats) {
    
    return(driversats)
  });
  console.log(driversats)
};

module.exports = driverSats
