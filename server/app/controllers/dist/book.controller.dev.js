"use strict";

var db = require("../models");

var User = db.user;

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