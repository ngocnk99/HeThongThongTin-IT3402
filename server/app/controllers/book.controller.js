const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.signin = (req, res) => {
    console.log(req.body)
    User.findOne({
            username: req.body.username
        })
        .populate("roles", "-__v")
        .exec((err, user) => {
            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                user.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            var token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            var authorities = [];

            for (let i = 0; i < user.roles.length; i++) {
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

exports.addBook = (req, res) => {
    console.log(req.body.email)
    User.updateOne({ email: req.body.email }, {
            book: req.body
        })
        .catch(error => console.log(error))
}

exports.getBook = (req, res) => {
    const search = req.query.search
        // const search = 'ngocnk99@gmail.com'
    console.log(search)
    if (search) {
        User.find()
            .or([{ email: search }, { username: search }])
            .then(user => {
                if (user[0]) {
                    return res.json(user[0].book)
                } else {
                    return res.status(404).send({ message: "Khong tim thay" });
                }
            })
            .catch(error => console.log(error))
    }
}