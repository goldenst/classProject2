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
  // Get all daily log data
  app.get("/api/dailylog", function (req, res) {
    db.Daily.findAll().then(function (dbDaily) {
      res.json(dbDaily);
    });
  });

  // Create a new daily log entry
  app.post("/api/dailylog", function (req, res) {
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