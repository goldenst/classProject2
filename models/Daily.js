module.exports = function(sequelize, DataTypes) {
  var Daily = sequelize.define("Daily", {
    date: DataTypes.DATEONLY,
    aaa_paid_sac: DataTypes.INTEGER,
    aaa_paid_yuba: DataTypes.INTEGER,
    rt_over_90: DataTypes.INTEGER,
    missing_ol: DataTypes.INTEGER,
    aaa_sac_rev: DataTypes.DECIMAL(10, 2),
    aaa_yuba_rev: DataTypes.DECIMAL(10, 2),
    non_aaa_rev_sac: DataTypes.DECIMAL(10, 2),
    non_aaa_rev_yuba: DataTypes.DECIMAL(10, 2),
    battery_sales_sac: DataTypes.DECIMAL(10, 2),
    battery_sales_yuba: DataTypes.DECIMAL(10, 2),
    storage_sac: DataTypes.DECIMAL(10, 2),
    storage_yuba: DataTypes.DECIMAL(10, 2),
    pd_calls_sac: DataTypes.INTEGER,
    pd_calls_yuba: DataTypes.INTEGER,
    shop_calls_sac: DataTypes.INTEGER,
    shop_calls_yuba: DataTypes.INTEGER,
    battery_installs_sac: DataTypes.INTEGER,
    battery_installs_yuba: DataTypes.INTEGER,
    drivers_on_duty: DataTypes.INTEGER,
    regular_hours: DataTypes.DECIMAL(6, 2),
    ot_hours: DataTypes.DECIMAL(6, 2),
    daily_truck_miles: DataTypes.INTEGER,
    driver_clearing_err: DataTypes.INTEGER,
    no_triage: DataTypes.INTEGER,
    dispatch_clearing_err: DataTypes.INTEGER,
    not_updating_member: DataTypes.INTEGER
  });
  return Daily;
};
