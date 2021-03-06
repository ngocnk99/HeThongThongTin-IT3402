"use strict";

var config = require("../config/auth.config");

var db = require("../models");

var User = db.user;
var Role = db.role;

var jwt = require("jsonwebtoken");

var bcrypt = require("bcryptjs");

exports.signup = function (req, res) {
  console.log(req.body);
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  });
  user.save(function (err, user) {
    if (err) {
      res.status(500).send({
        message: err
      });
      return;
    }

    if (req.body.roles) {
      Role.find({
        name: {
          $in: req.body.roles
        }
      }, function (err, roles) {
        if (err) {
          res.status(500).send({
            message: err
          });
          return;
        }

        user.roles = roles.map(function (role) {
          return role._id;
        });
        user.save(function (err) {
          if (err) {
            res.status(500).send({
              message: err
            });
            return;
          }

          res.send({
            message: "User was registered successfully!"
          });
        });
      });
    } else {
      Role.findOne({
        name: "user"
      }, function (err, role) {
        if (err) {
          res.status(500).send({
            message: err
          });
          return;
        }

        user.roles = [role._id];
        user.save(function (err) {
          if (err) {
            res.status(500).send({
              message: err
            });
            return;
          }

          res.send({
            message: "User was registered successfully!"
          });
        });
      });
    }
  });
};

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
      book: user.book,
      roles: authorities,
      accessToken: token
    });
  });
};