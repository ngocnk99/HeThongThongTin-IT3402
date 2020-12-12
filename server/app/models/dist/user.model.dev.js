"use strict";

var mongoose = require("mongoose");

var User = mongoose.model("User", new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  book: Object,
  file: {
    type: Array
  },
  roles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role"
  }]
}));
module.exports = User;