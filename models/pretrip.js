module.exports = function (sequelize, DataTypes) {
  var PreTrip = sequelize.define("PreTrip", {
    driver: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    Time: DataTypes.TIME,
    truck_num: DataTypes.INTEGER,
    odom: DataTypes.INTEGER,
    ac: DataTypes.STRING,
    belts_hoses: DataTypes.STRING,
    parking_brake: DataTypes.STRING,
    defroster: DataTypes.STRING,
    exhust: DataTypes.STRING,
    front_axle: DataTypes.STRING,
    head_stop_lamps: DataTypes.STRING,
    clearance: DataTypes.STRING,
    radiator: DataTypes.STRING,
    fire_ext: DataTypes.STRING,
    starter: DataTypes.STRING,
    tires: DataTypes.STRING,
    windows: DataTypes.STRING,
    air_lines: DataTypes.STRING,
    body: DataTypes.STRING,
    service_brake: DataTypes.STRING,
    drive_line: DataTypes.STRING,
    fluid_level: DataTypes.STRING,
    fuel_tank: DataTypes.STRING,
    tail_lamps: DataTypes.STRING,
    mirrors: DataTypes.STRING,
    rear_end: DataTypes.STRING,
    traffic_cones: DataTypes.STRING,
    steering: DataTypes.STRING,
    transmission: DataTypes.STRING,
    wipers: DataTypes.STRING,
    battery: DataTypes.STRING,
    brake_assy: DataTypes.STRING,
    clutch: DataTypes.STRING,
    engine: DataTypes.STRING,
    frame: DataTypes.STRING,
    horn: DataTypes.STRING,
    turn_ind: DataTypes.STRING,
    oil_psi: DataTypes.STRING,
    reflectors: DataTypes.STRING,
    suspention: DataTypes.STRING,
    wheels: DataTypes.STRING,
    SHOP_RADIO: DataTypes.STRING,
    comment: DataTypes.STRING
  });
  return PreTrip;
};