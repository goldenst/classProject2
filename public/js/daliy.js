$(document).ready(function () {
  $("#dailySubmit").on("click", function (e) {
    e.preventDefault();

    var newCallNum = $("#callNumber").val().trim();
    var newDate = $("#date").val().trim();
    var newDriver = $("#driver").val().trim();
    var newDamages = $("#damages").val().trim();

    $.ajax("/daily/create", {
      type: "POST",
      data: {
        aaa_call_num: newCallNum,
        driver: newDriver,
        date: newDate,
        damages: newDamages
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
      url: "/daily/destroy/" + thisId
    }).then(function (response) {
      location.reload();
    });
  });
});