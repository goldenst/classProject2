module.exports = function (sequelize, DataTypes) {
  var Lien = sequelize.define("Lien", {
    vin: DataTypes.STRING,
    engine: DataTypes.STRING,
    tow_tag: DataTypes.STRING,
    licence: DataTypes.STRING,
    state: DataTypes.STRING,
    expires: DataTypes.STRING,
    year: DataTypes.STRING,
    make: DataTypes.STRING,
    model: DataTypes.STRING,
    body_style: DataTypes.STRING,
    tow_fees: DataTypes.STRING,
    storage: DataTypes.STRING,
    date_impounded: DataTypes.DATEONLY,
    pd_tow: DataTypes.STRING,
    has180: DataTypes.STRING,
    value: DataTypes.STRING,
    cust_name: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.STRING,
    over: DataTypes.STRING
  });
  return Lien;
};