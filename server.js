const express = require("express");
const router = require("express").Router();
const app = express();
const routes = require("./routes/api")
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
// Matches with "/api/books"
router.route("/books")
  .get(routes.read)
  .post(routes.cre);

// Matches with "/api/books/:id"
router
  .route("/books/:id")
  .get(routes.readID)
  .delete(routes.del);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks");

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
