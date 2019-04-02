module.exports = function(sequelize, DataTypes) {
  var Driver_log = sequelize.define("Driver_log", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Driver_log;
};
