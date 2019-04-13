var db = require("../models");
var reports = require ('../dbUtil/reports');


module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("signin", {
        msg: "Welcome!",
        examples: dbExamples
      });  
    });
    
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });
  // --------------------------------------------------------------Pdr
  // Load pdr page
  app.get("/pdr", function (req, res) {
    db.Pdr.findAll().then(function (dbPdr) {
      res.render("pdr", {
        pdr: dbPdr
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/pdr/:id", function (req, res) {
    db.Pdr.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbPdr) {
      res.render("pdr", {
        pdr: dbPdr
      });
    });
  });



  app.delete("/pdr/destroy/:id", function (req, res) {
    db.Pdr.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPdr) {
     // console.log(dbPdr);
      res.json(dbPdr);
    });
  });

  // ---------------------------------------------------------driver Log
  // Load driver log page
  app.get("/driverLog", function (req, res) {
    db.Driver_log.findAll().then(function (dbDriver_log) {
      res.render("driverLog", {
        driverLog: dbDriver_log
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/driverLog/:id", function (req, res) {
    db.Driver_log.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDriver_log) {
      res.render("driverLog", {
        driverLog: dbDriver_log
      });
    });
  });


  app.delete("/driverlog/destroy/:id", function (req, res) {
    db.Driver_log.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDriver_log) {
      //console.log(dbDriver_log);
      res.json(dbDriver_log);
    });
  });

  // ---------------------------------------------------- Daily Work
  // Load Daily page
  app.get("/daily", function (req, res) {
    db.Daily.findAll().then(function (dbDaily) {
     // console.log(dbDaily)
      res.render("dailyWork", {
        dailyWork: dbDaily
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/daily/:id", function (req, res) {
    db.Daily.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDaily) {
      res.render("dailyWork", {
        dailyWork: dbDaily
      });
    });
  });

 

  app.delete("/daily/destroy/:id", function (req, res) {
    db.Daily.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDaily) {
      //console.log(dbDaily);
      //res.json(dbDaily);
    });
  });

  // ------------------------------------------------- Load login  page
  app.get("/api/login", function (req, res) {
    res.render("login", {});
  });

  // ------------------------------------------------- Load Pre Trip page
  app.get("/PreTrip", function (req, res) {
    res.render("preTrip", {});
  });

   // ------------------------------------------------- Load Vehicle Specs page
   app.get("/specs", function (req, res) {
    res.render("specs", {});
  });


  // -------------------------------------------------Load driver reports page
  app.get("/reports", function (req, res) {
    console.log("helo")
    reports().then(function(data){
      //console.log('DATA**********************', data);
      res.render("driverReport", data);
    });
    
  });

  app.get("/driverSats", function (req, res) {
    res.render("driverSats", {});
  });

  // -------------------------------------------------Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  app.get("/signin", function (req, res) {
    res.render("signin", {});
  });

  app.get("/signup", function (req, res) {
    res.render("signup", {});
  });

  app.get("/dashboard", function (req, res) {
    res.render("dashboard", {});
  });
};