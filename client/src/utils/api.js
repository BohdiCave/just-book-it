import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = `&printType=books&key=${process.env.REACT_APP_GB_API_KEY}`;  

export default API = {
  // Gets results from Google Books
  getGB: search => axios.get(BASEURL + search + APIKEY),
  // Get all books from DB
  getBooks: () => {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: (id) => {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: (bookData) => {
    return axios.post("/api/books", bookData);
  }
}
