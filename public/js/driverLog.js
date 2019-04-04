$(document).ready(function () {
  $("#driverLogSubmit").on("click", function (e) {
    e.preventDefault();

    console.log("call log button Clicked");
   
    var newDriver = $("#driver").val().trim();
    var newTag = $("#tag").val().trim();
    var newDate = $("#date").val().trim();
    var newMemNum = $("#mem_num").val().trim();
    var newMTV = $("#mtv").val().trim();
    var newTm = $("#tm").val().trim();
    var newreqBy = $("#reqBy").val().trim();
    var newSerPer = $("#serPer").val().trim();
    var newMemType = $("#memType").val().trim();
    var newEr = $("#er").val().trim();
    var newClear = $("#clear").val().trim();
    var newTos = $("#tos").val().trim();
    var newnotes = $("#notes").val().trim();
    var newPdr = $("#pdr").val().trim();
    var newbounty = $("#bounty").val().trim();
    var newCharge = $("#excharg").val().trim();

    
    $.ajax("/driver_Log/create", {
      type: "POST",
      data: {
        driver: newDriver,
        aaaTag: newTag,
        date: newDate,
        mem_mem_num: newMemNum,
        mtv: newMTV,
        tow_miles: newTm,
        req_by: newreqBy,
        svc_perf: newSerPer,
        aaa_mem_type: newMemType,
        enroute: newEr,
        clear: newClear,
        tos: newTos,
        dnotes: newnotes,
        pdr_filed: newPdr,
        bounty: newbounty,
        ex_charge: newCharge

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
      url: "/driver_Log/destroy/" + thisId
    }).then(function (response) {
      location.reload();
    });
  });
});
