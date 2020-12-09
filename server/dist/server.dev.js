"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var dbConfig = require("./app/config/db.config");

var app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions)); // parse requests of content-type - application/json

app.use(bodyParser.json()); // parse requests of content-type - application/x-www-form-urlencoded

app.use(bodyParser.urlencoded({
  extended: true
}));

var db = require("./app/models");

var Role = db.role;
db.mongoose.connect("mongodb://".concat(dbConfig.HOST, ":").concat(dbConfig.PORT, "/").concat(dbConfig.DB), {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log("Successfully connect to MongoDB.");
  initial();
})["catch"](function (err) {
  console.error("Connection error", err);
  process.exit();
}); // simple route

app.get("/", function (req, res) {
  res.json({
    message: "Welcome to bezkoder application."
  });
}); // routes

require("./app/routes/auth.routes")(app);

require("./app/routes/user.routes")(app);

require("./app/routes/book.routes")(app); // set port, listen for requests


var PORT = process.env.PORT || 8090;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});

function initial() {
  Role.estimatedDocumentCount(function (err, count) {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(function (err) {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });
      new Role({
        name: "moderator"
      }).save(function (err) {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });
      new Role({
        name: "admin"
      }).save(function (err) {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}