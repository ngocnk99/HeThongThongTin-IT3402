const db = require("../models");
const User = db.user;


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