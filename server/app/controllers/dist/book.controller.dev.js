"use strict";

var config = require("../config/auth.config");

var db = require("../models");

var User = db.user;
var Role = db.role;

var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");

exports.signin = function (req, res) {
  console.log(req.body);
  User.findOne({
    username: req.body.username
  }).populate("roles", "-__v").exec(function (err, user) {
    if (err) {
      res.status(500).send({
        message: err
      });
      return;
    }

    if (!user) {
      return res.status(404).send({
        message: "User Not found."
      });
    }

    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!"
      });
    }

    var token = jwt.sign({
      id: user.id
    }, config.secret, {
      expiresIn: 86400 // 24 hours

    });
    var authorities = [];

    for (var i = 0; i < user.roles.length; i++) {
      authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
    }

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: authorities,
      accessToken: token
    });
  });
};

exports.addBook = function (req, res) {
  console.log(req.body.email);
  User.updateOne({
    email: req.body.email
  }, {
    book: req.body
  })["catch"](function (error) {
    return console.log(error);
  });
};

exports.getBook = function (req, res) {
  var search = req.query.search; // const search = 'ngocnk99@gmail.com'

  console.log(search);

  if (search) {
    User.find().or([{
      email: search
    }, {
      username: search
    }]).then(function (user) {
      if (user[0]) {
        return res.json(user[0].book);
      } else {
        return res.status(404).send({
          message: "Khong tim thay"
        });
      }
    })["catch"](function (error) {
      return console.log(error);
    });
  }
};