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
    db.driver_Log.findAll().then(function (dbdriver_Log) {
      res.json(dbdriver_Log);
    });
  });

  // Create a new driver log entry
  app.post("/api/Driverlog", function (req, res) {
    db.driver_Log.create(req.body).then(function (dbdriver_Log) {
      res.json(dbdriver_Log);
    });
  });

  // Delete an driverlog entry by id
  app.delete("/api/pdr/:id", function (req, res) {
    db.driver_Log.destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function (dbdriver_Log) {
        res.json(dbdriver_Log);
      });
  });
};