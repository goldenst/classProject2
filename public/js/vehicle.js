// api
// https://docs.rapidapi.com/docs/nodejs-1  --- documintation
// https://docs.rapidapi.com/docs/basics-creating-a-project 
// https://rapidapi.com/vinfreecheck/api/vin-decoder-1


// Request Snippet
// NodeJS

unirest.get("https://vindecoder.p.rapidapi.com/v1.1/decode_vin?vin={vin}")
  .header("X-RapidAPI-Host", "vindecoder.p.rapidapi.com")
  .header("X-RapidAPI-Key", "5bdc095f49mshd09653f9588dc7ap1d5077jsnbd87a89b0887")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
  });

// Sample Response

// {3 items
// "success":true
// "specification":{18 items
// "vin":"4F2YU09161KM33122"
// "year":"2001"
// "make":"MAZDA"
// "model":"TRIBUTE"
// "trim_level":"LX"
// "engine":"3.0L V6 DOHC 24V"
// "style":"SPORT UTILITY 4-DR"
// "made_in":"UNITED STATES"
// "steering_type":"R&P"
// "anti_brake_system":"Non-ABS | 4-Wheel ABS"
// "tank_size":"16.40 gallon"
// "overall_height":"69.90 in."
// "overall_length":"173.00 in."
// "overall_width":"71.90 in."
// "standard_seating":"5"
// "optional_seating":NULL
// "highway_mileage":"24 miles/gallon"
// "city_mileage":"18 miles/gallon"
// }
// "vin":"4F2YU09161KM33122"
// }