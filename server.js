var express = require('express');
var app = express();
var passport   = require('passport');
var session    = require('express-session');
var env = require('dotenv').load();
var exphbs = require('express-handlebars')

//Parse application body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
 
// For Passport
// session secret
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true}));  
app.use(passport.initialize()); 
app.use(passport.session()); // persistent login sessions

//For Handlebars
app.engine('handlebars', exphbs({
  extname: '.handlebars',
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



 
app.get('/', function(req, res) {
 
    res.send('Welcome to Passport with Sequelize');
 
});

//Models
var models = require("./models");

//Routes
var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, models.user);
var PORT = process.env.PORT || 3000;
// Sync Database and listen to local server
models.sequelize.sync().then(function() {
    app.listen(PORT, function(err) {
        console.log("Server is running on 3000 and database looks fine")
    }) 
}).catch(function(err) { 
    console.log(err, "Something went wrong with the Database Update!") 
});