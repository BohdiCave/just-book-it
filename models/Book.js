const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: { type: String, trim: true, required: true },
  authors: [{ type: String, unique: true, required: true }],
  description: String,
  image: { type: String, match: [/http.+/, "Not a valid URL"]},
  link: { type: String, match: [/http.+/, "Not a valid URL"]}
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;