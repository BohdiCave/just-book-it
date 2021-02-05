const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, trim: true, required: true },
  authors: [{ type: String, unique: true, required: true }],
  description: String,
  imageURL: { type: String, match: [/http.+/, "Not a valid URL"]},
  link: { type: String, required: true}
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;