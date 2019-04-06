$(document).ready(function () {
  $("#dailySubmit").on("click", function (e) {
    e.preventDefault();

    console.log("daily submit clicked");

    var newDate = $("#date").val().trim();
    var newAaasac = $("#aaaSac").val().trim();
    var newAaayuba = $("#aaaYuba").val().trim();
    var newOver90 = $("#over90").val().trim();
    var newMissing = $("#missing").val().trim();
    var newRevsac = $("#revSac").val().trim();
    var newRevyuba = $("#revYuba").val().trim();
    var newNonsac = $("#nonaaaSac").val().trim();
    var newNonyuba = $("#nonaaayuba").val().trim();
    var newBatsac = $("#batterySac").val().trim();
    var newBatyuba = $("#batteryYuba").val().trim();
    var newStoragesac = $("#storageSac").val().trim();
    var newStorageYuba = $("#storageYuba").val().trim();
    var newPdsac = $("#pdSac").val().trim();
    var newPDyuba = $("#pdYuba").val().trim();
    var newShopsac = $("#shopSac").val().trim();
    var newShopyuba = $("#shopYuba").val().trim();
    var newDriverOnDuty = $("#driversDuty").val().trim();
    var newRegHours = $("#regularHours").val().trim();
    var newOtHours = $("#otHours").val().trim();
    var newMiles = $("#miles").val().trim();
    var newSacInstalls = $("#sacBatInstalls").val().trim();
    var newYubaInstalls = $("#yubaBatInstalls").val().trim();
    var newDriverErr = $("#driverErrors").val().trim();
    var newDispErr = $("#dispErrors").val().trim();
    var NewNoUpdate = $("#noUpdate").val().trim();

    $.post("/api/daily/create", {

      date: newDate,
      aaa_paid_sac: newAaasac,
      aaa_paid_yuba: newAaayuba,
      rt_over_90: newOver90,
      missing_ol: newMissing,
      aaa_sac_rev: newRevsac,
      aaa_yuba_rev: newRevyuba,
      aaa_non_rev_sav: newNonsac,
      aaa_non_rev_yuba: newNonyuba,
      battery_sales_sac: newBatsac,
      battery_sales_yuba: newBatyuba,
      storage_sac: newStoragesac,
      storage_yuba: newStorageYuba,
      pd_calls_sac: newPdsac,
      pd_calls_yuba: newPDyuba,
      shop_calls_sac: newShopsac,
      shop_calls_yuba: newShopyuba,
      drivers_on_duty: newDriverOnDuty,
      regular_hours: newRegHours,
      ot_hours: newOtHours,
      daily_truck_miles: newMiles,
      battery_installs_sac: newSacInstalls,
      battery_installs_yuba: newYubaInstalls,
      driver_clearing_err: newDriverErr,
      dispatch_clearing_err: newDispErr,
      not_updating_member: NewNoUpdate

    }).then(function (res) {
      console.log(res);
      //location.reload();
    });
  });

  $(".delete").on("click", function (e) {
    e.preventDefault();

    var thisId = $(this).attr("data-id");

    $.ajax({
      method: "DELETE",
      url: "/daily/destroy/" + thisId
    }).then(function () {
      location.reload();
    });
  });
});