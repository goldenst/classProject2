module.exports = function (sequelize, DataTypes) {
  var driver_log = sequelize.define("Driver_log", {
    driver: DataTypes.STRING,
    aaaTag: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    aaa_mem_num: DataTypes.INTEGER,
    mtv: DataTypes.DECIMAL(6, 1),
    tow_miles: DataTypes.DECIMAL(8, 1),
    req_by: DataTypes.STRING,
    svc_perf: DataTypes.STRING,
    aaa_mem_type: DataTypes.STRING,
    enroute: DataTypes.TIME,
    clear: DataTypes.TIME,
    tos: DataTypes.INTEGER,
    dnotes: DataTypes.STRING
  });
  return driver_log;
};
