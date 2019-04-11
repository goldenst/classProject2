$(document).ready(function () {
  $("#pdrSubmit").on("click", function (e) {
    e.preventDefault();

    console.log("pdr button Clicked");

    var newCallNum = $("#callNumber").val().trim();
    var newDate = $("#date").val().trim();
    var newDriver = $("#driver").val().trim();
    var newDamages = $("#damages").val().trim();
    var newSignature = $("#signature").val().trim();

    $.ajax("api/Pdr/create", {
      type: "POST",
      data: {
        aaa_call_num: newCallNum,
        driver: newDriver,
        date: newDate,
        damages: newDamages,
        signature: newSignature
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
