module.exports = function(sequelize, DataTypes) {
  var Driver = sequelize.define("Driver", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Driver;
};
