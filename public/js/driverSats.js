$(document).ready(function () {
  $("#driverSatsubmit").on("click", function (e) {
    e.preventDefault();

    console.log("Driver Stats button Clicked");

    var newSacCps = $("#sac_cps").val().trim();
    var newSacOver = $("#sac_overall").val().trim();
    var newSacDriver = $("#sac_driver").val().trim();
    var newSacRes =$("#sac_responce").val().trim();
    var newYubaCps = $("#yuba_cps").val().trim();
    var newYubaOver = $("#yuba_overall").val().trim();
    var newYubaDriver = $("#yuba_driver").val().trim();
    var newYubaRes = $("#yuba_responce").val().trim()
    

    $.post("/pdr/create", {
      type: "POST",
      data: {
        cps_sac: newSacCps,
        overall_sac: newSacOver,
        driver_sac: newSacDriver,
        responce_sac: newSacRes,
        cps_yuba: newYubaCps,
        overall_yuba: newYubaOver,
        driver_yuba: newYubaDriver,
        responce_yuba: newYubaRes

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
      url: "/pdr/destroy/" + thisId
    }).then(function (response) {
      location.reload();
    });
  });
});
