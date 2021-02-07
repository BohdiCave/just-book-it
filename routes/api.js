const router = require("express").Router();
const booksController = require("../controllers/booksController");

router
  .route("/api/books")
  .get(booksController.read)
  .post(booksController.cre);

router
  .route("/api/books/:id")
  .get(booksController.readID)
  .delete(booksController.del);

module.exports = router;
