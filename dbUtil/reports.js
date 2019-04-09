
var db = require ('../models')

 async function updateDailyReports(){
  var attributes = db.Daily.rawAttributes;
  var columnNames = Object.keys(attributes);

  var results = {};
  for (const col of columnNames){
    let sum = await db.Daily.sum(col);
      //console.log(col);
      results[col] = sum;
     
  }
  console.log(results);
  
  return results;
}

module.exports = updateDailyReports
