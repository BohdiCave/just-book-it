import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = `&printType=books&key=${process.env.REACT_APP_GB_API_KEY}`;  

export default {
  // Gets results from Google Books
  getGB: query => axios.get(BASEURL + query + APIKEY),
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

/*
intitle: Returns results where the text following this keyword is found in the title.
inauthor: Returns results where the text following this keyword is found in the author.
inpublisher: Returns results where the text following this keyword is found in the publisher.
subject: Returns results where the text following this keyword is listed in the category list of the volume.
isbn: Returns results where the text following this keyword is the ISBN number.
lccn: Returns results where the text following this keyword is the Library of Congress Control Number.
oclc: Returns results where the text following this keyword is the Online Computer Library Center number.
*/