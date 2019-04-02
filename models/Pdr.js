module.exports = function(sequelize, DataTypes) {
  var Pdr = sequelize.define("Pdr", {
    aaa_call_num: DataTypes.STRING,
    driver: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    damages: DataTypes.TEXT
  });
  return Pdr;
};
