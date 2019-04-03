var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.render("index", {
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

  app.post("/pdr/create", function (req, res) {
    db.Pdr.create({
      aaa_call_num: req.body.aaa_call_num,
      driver: req.body.driver,
      date: req.body.date,
      damages: req.body.damages
    }).then(function (dbPdr) {
      console.log(dbPdr);
      res.redirect("/pdr");
    });
  });

  app.delete("/pdr/destroy/:id", function (req, res) {
    db.Pdr.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbPdr) {
      console.log(dbPdr);
      res.json(dbPdr);
    });
  });

  // ---------------------------------------------------------driver Log
  // Load driver log page
  app.get("/driverLog", function (req, res) {
    db.driver_log.findAll().then(function (dbdriver_log) {
      res.render("driverLog", {
        driverLog: dbdriver_log
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/driverLog/:id", function (req, res) {
    db.dbdriver_log.findOne({
      where: {
        id: req.params.id
      }
    }).then (function (dbdriver_log) {
      res.render("driverLog", {
        driverLog: dbdriver_log
      });
    });
  });

  app.post("/driverlog/create", function (req, res) {
    db.Pdr.create({
      driver: req.body.driver,
      aaaTag: req.body.aaaTag,
      date: req.body.date,
      aaa_mem_num: req.body.aaa_mem_num
    }).then(function (dbdriver_log) {
      console.log(dbdriver_log);
      res.redirect("/driverLog");
    });
  });

  // app.delete("/pdr/destroy/:id", function (req, res) {
  //   db.Pdr.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(function (dbPdr) {
  //     console.log(dbPdr);
  //     res.json(dbPdr);
  //   });
  // });

  // ------------------------------------------------- Load login  page
  app.get("/api/login", function (req, res) {
    res.render("login", {});
  });

  // -------------------------------------------------Load driver reports page
  app.get("/driverReport", function (req, res) {
    res.render("driverReport", {});
  });

  // -------------------------------------------------Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};