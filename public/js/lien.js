
$.ajax({
  url: "https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeId/440?format=json",
  type: "GET",
  dataType: "json",
  success: function (result) {
    console.log(result);
  },
  error: function (xhr, ajaxOptions, thrownError) {
    console.log(xhr.status);
    console.log(thrownError);
  }
});