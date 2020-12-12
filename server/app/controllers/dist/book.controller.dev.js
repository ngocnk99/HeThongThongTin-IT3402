"use strict";

var db = require("../models");

var User = db.user; <<
<< << < HEAD
    ===
    === =


    exports.addBook = function(req, res) {
        console.log(req.body);
        User.updateOne({
            email: req.body.email
        }, {
            book: req.body
        })["catch"](function(error) {
            return console.log(error);
        });
    }; >>>
>>> > 2 f5467f75593d9c52f52fbb1507fd77947067a32




exports.getBook = function(req, res) {
    //  console.log(req.body)
    var search = req.query.search;
    console.log(req.query);

    if (search) {
        User.find().or([{
            email: search
        }, {
            username: search
        }]).then(function(user) {
            if (user[0]) {
                return res.json(user[0].book);
            } else {
                return res.status(404).send({
                    message: "Khong tim thay"
                });
            }
        })["catch"](function(error) {
            return console.log(error);
        });
    }
};

exports.getBookById = function(req, res) {
    console.log(req.params);
    var bookId = req.params.bookId;

    if (bookId) {
        User.findById(bookId).then(function(user) {
            return res.json(user.book);
        })["catch"](function(error) {
            return res.json('khong thay');
        });
    }
};