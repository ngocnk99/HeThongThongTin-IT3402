const controller = require("../controllers/book.controller");

module.exports = function(app) {
    app.post("/api/book/mybook/edit", controller.addBook);
     app.get("/api/book", controller.getBook)
    app.get("/api/book/:bookId",controller.getBookById)
};