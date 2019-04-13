$(document).ready(function () {
  $("#preTripSubmit").on("click", function (e) {
    e.preventDefault();

    console.log("pretrip button Clicked");

    var newDate = $("#date").val().trim();
    var newDriver = $("#driver").val().trim();
    var newTime = $("#time").val().trim();
    var newTruckNum = $("#trucknum").val().trim();
    var newOdom = $("#odom").val().trim();
    var newAirComp = $("#air_compressor").val().trim();
    var newAirLines = $("#air_lines").val().trim();
    var newBattery = $("#battery").val().trim();
    var newBelts = $("#belts_hoses").val().trim();
    var newBody = $("#body").val().trim();
    var nerwBrakeAssy = $("#brake_assory").val().trim();
    var newParkingBrake = $("#parking_brake").val().trim();
    var newClutch = $("#clutch").val().trim();
    var newHeater = $("#heater").val().trim();
    var newDriveLine = $("#driveLine").val().trim();
    var newEngine = $("#engine").val().trim();
    var newExhaust = $("#exhaust").val().trim();
    var newFluidLevel = $("#fluid_level").val().trim();
    var newFrame = $("#frame").val().trim();
    var newFronrAxle = $("#front_axle").val().trim();
    var newFuelTank = $("#fuel_tank").val().trim();
    var newHorn = $("#horn").val().trim();
    var newHeadlamp = $("#head_stop").val().trim();
    var newTailLamp = $("#tail_dash").val().trim();
    var newTurn = $("#turn_ind").val().trim();
    var newClearance = $("#clearance").val().trim();
    var newMirrors = $("#mirrors").val().trim();
    var newOilPsi = $("#oil_psi").val().trim();
    var newRadiator = $("#radiator").val().trim();
    var newRearEnd = $("#rear_end").val().trim();
    var newReflectors = $("#reflectors").val().trim();
    var newFireExt = $("#fire_ext").val().trim();
    var newCones = $("#cones").val().trim();
    var newTriangles = $("#triangles").val().trim();
    var newStarter = $("#starter").val().trim();
    var newSteering = $("#steering").val().trim();
    var newsuspention = $("#suspension").val().trim();
    var newTires = $("#tires").val().trim();
    var newTrans = $("#trans").val().trim();
    var newWheels = $("#wheels").val().trim();
    var newWindow = $("#windows").val().trim();
    var newWipers = $("#wipers").val().trim();
    var newRadio = $("#radio").val().trim();
    var newComment = $("#remarks").val().trim();


    $.ajax("api/PreTrip/create", {
      type: "POST",
      data: {
        // database spell  - new var
        driver: newDriver,
        date: newDate,
        time: newTime,
        truck_num : newTruckNum,
        odom: newOdom,
        ac: newAirComp,
        air_lines: newAirLines,
        belts_hoses: newBelts,
        parking_brake: newParkingBrake,
        defroster: newHeater,
        exhaust: newExhaust,
        front_axle: newFronrAxle,
        head_stop_lamps: newHeadlamp,
        clearance: newClearance,
        radiator: newRadiator,
        fire_ext: newFireExt,
        starter: newStarter,
        good: newClutch,
        windows: newWindow,
        airLines: newAirLines,
        body: newBody,
        service_brake: newServiceBrake,
        drive_line: newDriveLine,
        fluid_level: newFluidLevel,
        furl_tank: newFuelTank,
        tail_lamp: newTailLamp,
        mirrors: newMirrors,
        rear_end: newRearEnd,
        traffic_cones: newCones,
        steering: newSteering,
        transmission: newTrans,
        wipers: newWipers,
        battery: newBattery,
        brake_assy: nerwBrakeAssy,
        clutch: newClutch,
        engine: newEngine,
        frame: newFrame,
        horn: newHorn,
        turn_ind: newTurn,
        oil_psi: newOilPsi,
        reflectors: newTriangles,
        suspention: newsuspention,
        wheels: newWheels,
        shop_radio: newRadio,
        reflectors: newReflectors,
        tires: newTires,
        comment: newComment

      }
    }).then(function () {
      location.reload();
    });
  });

  $(".delete").on("click", function (e) {
    e.preventDefault();

    var thisId = $(this).attr("data-id");

    $.ajax({
      method: "DELETE",
      url: "/PreTrip/destroy/" + thisId
    }).then(function (response) {
      location.reload();
    });
  });
});
