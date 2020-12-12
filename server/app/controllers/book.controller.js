const db = require("../models");
const User = db.user;


exports.addBook = (req, res) => {
    console.log(req.body)
    User.updateOne({ email: req.body.email }, {
            book: req.body
        })
        .catch(error => console.log(error))
}

exports.getBook = (req, res) => {
    //  console.log(req.body)
    const search = req.query.search
    console.log(req.query)
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
exports.getBookById = (req, res) => {
    console.log(req.params)
    let bookId = req.params.bookId
    if (bookId) {
        User.findById(bookId)
            .then(user => {
                return res.json(user.book)
            })
            .catch(error => res.json('khong thay'))
    }
}