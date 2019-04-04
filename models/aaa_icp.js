module.exports = function (sequelize, DataTypes) {
  var aaa_icp = sequelize.define("aaa_icp", {
    date: DataTypes.DATEONLY,
    Call: DataTypes.INTEGER,
    driver_num: DataTypes.INTEGER,
    name: DataTypes.STRING,
    trk: DataTypes.INTEGER,
    pr: DataTypes.STRING,
    tlc: DataTypes.STRING,
    tlc2: DataTypes.STRING,
    pl:  DataTypes.STRING,
    pl2: DataTypes.STRING,
    ad:DataTypes.STRING,
    clc: DataTypes.STRING,
    reso: DataTypes.STRING,
    er: DataTypes.DECIMAL(6, 1),
    tw: DataTypes.DECIMAL(6, 1),
    re: DataTypes.TIME,
    di: DataTypes.TIME,
    ol: DataTypes.TIME,
    cl: DataTypes.TIME,
    basic: DataTypes.DECIMAL(6, 2),
    pluss: DataTypes.DECIMAL(6, 2),
    rv: DataTypes.DECIMAL(6, 2),
    add: DataTypes.DECIMAL(6, 2),
    total: DataTypes.DECIMAL(6, 2)
  });
  return aaa_icp;
};