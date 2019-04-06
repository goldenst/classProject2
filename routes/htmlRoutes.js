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
      damages: req.body.damages,
      signature: req.body.signature
    }).then(function (dbPdr) {
     //console.log(dbPdr);
      res.redirect("/pdr");
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

  app.post("/driverlog/create", function (req, res) {
    db.Driver_log.create({
      driver: req.body.driver,
      aaaTag: req.body.aaaTag,
      date: req.body.date,
      aaa_mem_num: req.body.aaa_mem_num,
      mtv: req.body.mtv,
      tow_miles: req.body.tow_miles,
      req_by: req.body.req_by,
      svc_perf: req.body.req_by,
      svc_perf: req.body.svc_perf,
      aaa_mem_num: req.body.aaa_mem_num,
      enroute: req.body.enroute,
      clear: req.body.clear,
      tos: req.body.tos,
      dnotes: req.body.dnotes

    }).then(function (dbDriver_log) {
     // console.log(dbDriver_log);
      res.redirect("/driverLog");
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
      res.render("dailywork", {
        dailyWork: dbDaily
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/driverLog/:id", function (req, res) {
    db.Daily.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbDaily) {
      res.render("driverLog", {
        dailyWork: dbDaily
      });
    });
  });

  app.post("/daily/create", function (req, res) {
    db.Daily.create({
      // driver: req.body.driver,
      // aaaTag: req.body.aaaTag,
      // date: req.body.date,
      // aaa_mem_num: req.body.aaa_mem_num
    }).then(function (dbDaily) {
      //console.log(dbDaily);
      res.redirect("/dailywork");
    });
  });

  app.delete("/daily/destroy/:id", function (req, res) {
    db.Daily.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbDaily) {
      console.log(dbDaily);
      //res.json(dbDaily);
    });
  });

  // ------------------------------------------------- Load login  page
  app.get("/api/login", function (req, res) {
    res.render("login", {});
  });

  // ------------------------------------------------- Load Pre Trip page
  app.get("/preTrip", function (req, res) {
    res.render("preTrip", {});
  });


  // -------------------------------------------------Load driver reports page
  app.get("/reports", function (req, res) {
    res.render("driverReport", {});
  });

  // -------------------------------------------------Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};