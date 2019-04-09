var db = require ("../models");




  function dailyWork(){
    db.Pdr.findAll().then(function (dbPdr) {
      res.render("pdr", {
        pdr: dbPdr
      });
    });
    console.log(results)
    return results
  }
  
  module.exports = dailyWork