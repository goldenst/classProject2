
var db = require ('../models')

sequelize
  .query('SELECT * FROM driversats', {
    model: DriverSats,
    mapToModel: true // pass true here if you have any mapped fields
  })
  .then(DriverSats => {
    // Each record will now be an instance of Project
    console.log('driver' , driverSats)
    return DriverSats

  })

module.exports = driverSats
