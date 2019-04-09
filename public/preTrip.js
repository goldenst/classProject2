$(document).ready(function () {
  $("#preTripSubmit").on("click", function (e) {
    e.preventDefault();

    console.log("pretrip button Clicked");

    var newDate = $("#date").val().trim();
    var newDriver = $("#driver").val().trim();
    var newTruckNum =$("#trucknum").val().trim(),
    var newOdom = $("#odom").val().trim(),
    var newAirComp = $("#air_compressor").val().trim(),
    var newAirLines = $("#air_lines").val().trim(),
    var newBattery = $("#battery").val().trim(),
    var newBelts = $("#belts_hoses").val().trim(),
    var newBody = $("#body").val().trim(),
    var nerwBrakeAssy = $("#brake_assory").val().trim(),
    var newParkingBrake = $("#parking_brake").val().trim(),
    var newClutch = $("#clutch").val().trim(),
    var newHeater = $("#heater").val().trim(),
    var newDriveLine = $("#driveLine").val().trim(),
    var newEngine = $("#engine").val().trim(),
    var newExhaust = $("#exhaust").val().trim(),
    var newFluidLevel = $("#fluid_level").val().trim(),
    var newFrame = $("#frame").val().trim(),
    var newFronrAxle = $("#front_axle").val().trim(),
    var newFuelTank = $("#fuel_tank").val().trim(),
    var newHorn = $("#horn").val().trim(),
    var newHeadlamp = $("#head_stop").val().trim(),
    var newTailLamp = $("#tail_dash").val().trim(),
    var newTurn = $("#turn_ind").val().trim(),
    var newClearance = $("#clearance").val().trim(),
    var newMirrors = $("#mirrors").val().trim(),
    var newOilPsi = $("#oil_psi").val().trim(),
    var newRadiator = $("#radiator").val().trim(),
    var newRearEnd = $("#rear_end").val().trim(),
    var newReflectors = $("#reflectors").val().trim(),
    var newFireExt = $("#fire_ext").val().trim(),
    var newCones = $("#cones").val().trim(),
    var newTriangles = $("#triangles").val().trim(),
    var newStarter = $("#starter").val().trim(),
    var newSteering = $("#steering").val().trim(),
    var newsuspention = $("#suspension").val().trim(),
    var newTires = $("#tires").val().trim(),
    var newTrans = $("#trans").val().trim(),
    var newWheels = $("#wheels").val().trim(),
    var newWindow = $("#windows").val().trim(),
    var newWipers = $("#wipers").val().trim(),
    var newRadio = $("#radio").val().trim(),
    var newComment = $("#remarks").val().trim(),


    $.ajax("/pretrip/create", {
      type: "POST",
      data: {
        // database spell  - new var
        driver: newDriver,
        date: newDate,
        truckNum : newTruckNum,
        odom: newOdom,
        air_compressor: newAirComp,
        air_lines: newAirLines,
        battery: newBattery,
        belts_hoses: newBelts,
        body: newBody,
        brake_assory: nerwBrakeAssy,
        parking_brake: newParkingBrake,
        clutch: newClutch,

     
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
      url: "/pretrip/destroy/" + thisId
    }).then(function (response) {
      location.reload();
    });
  });
});
