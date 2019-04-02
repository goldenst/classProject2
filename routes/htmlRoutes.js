var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load pdr page
  app.get("/pdr", function(req, res) {
    res.render("pdr", {
      pdr: pdrObject
    });
  });

  app.post("/pdr/create", function(req, res) {
    res.json(req.body)
  });

  // Load login  page
  app.get("/api/login", function(req, res) {
    res.render("login", {});
  });

  // Load driver reports page
  app.get("/api/driverReports", function(req, res) {
    res.render("driverReport", {});
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
