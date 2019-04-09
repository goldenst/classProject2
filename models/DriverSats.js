
module.exports = function(sequelize, DataTypes) {
  var DriverSats = sequelize.define("DriverSats", {
    cps_sac: DataTypes.DECIMAL(4,1),
    overall_sac: DataTypes.DECIMAL(3,1),
    driver_sac: DataTypes.DECIMAL(3,1),
    responce_sac: DataTypes.DECIMAL(3,1),
    cps_yuba: DataTypes.DECIMAL(4,1),
    overall_yuba: DataTypes.DECIMAL(3,1),
    driver_yuba: DataTypes.DECIMAL(3,1),
    responce_yuba: DataTypes.DECIMAL(3,1)
  });
  return DriverSats;
};
