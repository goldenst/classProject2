var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbExample) {
      res.json(dbExample);
    });
  });
  //  ----------------------------------------------- PDR ROUTES -----------------------------
  // Get all Pdr data
  app.get("/api/Pdr", function (req, res) {
    db.Pdr.findAll().then(function (dbPdr) {
      res.json(dbPdr);
    });
  });

  // Create a new Pdr entry
  app.post("/api/Pdr", function (req, res) {
    db.Pdr.create(req.body).then(function (dbPdr) {
      res.json(dbPdr);
    });
  });

  // Delete an Pdr entry by id
  app.delete("/api/pdr/:id", function (req, res) {
    db.Pdr.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPdr) {
      res.json(dbPdr);
    });
  });

  // ------------------------------------- pre trip -------------------------------------
    // Get all Pre Trip data
    app.get("/api/pretrip", function (req, res) {
      db.PreTrip.findAll().then(function (dbPreTrip) {
        res.json(dbPreTrip);
      });
    });
  
    // Create a new pre Trip entry
    app.post("/api/PreTrip", function (req, res) {
      db.PreTrip.create(req.body).then(function (dbPreTrip) {
        res.json(dbPreTrip);
      });
    });
  
    // Delete an Pre Trip entry by id
    app.delete("/api/PreTrip/:id", function (req, res) {
      db.PreTrip.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbPreTrip) {
        res.json(dbPreTrip);
      });
    });
  // ---------------------------------------------Driver log routes ---------------------------
  // Get all driver log data
  app.get("/api/driverlog", function (req, res) {
    db.Driver_log.findAll().then(function (dbDriver_log) {
      res.json(dbDriver_log);
    });
  });

  // Create a new driver log entry
  app.post("/api/Driverlog", function (req, res) {
    db.Driver_log.create(req.body).then(function (dbDriver_log) {
      res.json(dbDriver_log);
    });
  });

  // Delete an driverlog entry by id
  app.delete("/api/driverLog/:id", function (req, res) {
    db.driver_Log.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (dbDriver_log) {
        res.json(dbDriver_log);
      });
  });


  // ----------------------------------------- Daily Work -------------------------
  // counts records
  // app.get("/api/dailylog", function (req, res) {
  //   db.Daily.count({attributes: ["aaa_paid_sac"] }).then(function (dbDaily) {
  //     res.json(dbDaily);
  //   });
  // });

  // app.get("/api/dailylog", function (req, res) {
  //   db.Daily.sum("aaa_paid_sac").then(function (sum) {

  //     console.log(sum);
  //     res.json(sum);
  //   });
  // });


  //Get all daily log data
  app.get("/api/dailylog", async function (req, res) {
    var attributes = db.Daily.rawAttributes;
    var columnNames = Object.keys(attributes);

    var results = [];
    for (const col of columnNames){
      let sum = await db.Daily.sum(col);
        console.log(col);
        results.push({
          col: col,
          sum: sum,
        });
    }
    console.log(results);
    
    res.json(results);
  });

  // Create a new daily log entry
  app.post("/api/daily/create", function (req, res) {
    db.Daily.create(req.body).then(function (dbDaily) {
      res.json(dbDaily);
    });
  });

  // Delete an daily log entry by id
  app.delete("/api/dailyLog/:id", function (req, res) {
    db.Daily.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (dbDaily) {
        res.json(dbDaily);
      });
  });

  //  ---------------------- AAA icp reports  IM CRAZY TO GET THIS DONE   DO LATER NEED MORE TIME ---------

  app.get("/api/reports", function (req, res) {
    db.aaa_icp.findAll().then(function (dbaaa_icp) {
      res.json(dbaaa_icp);
    });
  });


};