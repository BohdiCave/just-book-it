import React from 'react';
import React, { useState, useEffect } from "react";
import API from "../utils/API";

export default function Search() {
    
  // Setting our component's initial state
  const [books, setBooks] = useState([]);
  const [searchTerms, setSearchTerms] = useState({});

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])

  // Loads all books and sets them to books
  function loadBooks() {
    API.getGB("cthulhu+inauthor:lovecraft")
    .then(res => setBooks(res.data))
    .catch(err => console.log(err));
    
    // API.getBooks()
    //   .then(res => 
    //     setBooks(res.data)
    //   )
    //   .catch(err => console.log(err));
  };

  // Making a call to Google Books API
  function apiCall(query) {
    if (searchTerms.title && searchTerms.author) {
        const query = `${searchTerms.title}+inauthor:${searchTerms.author}`;
    } else if (searchTerms.title && !(searchTerms.author)) {
        const query = searchTerms.title;
    } else {
        const query = searchTerms.author;
    }
    API.getGB(query)
       .then(res => setBooks(res.data))
       .catch(err => console.log(err));
  }
  
  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchTerms({ ...searchTerms, [name]: value});
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.title && formObject.author) {
      var bothTitleAuthor = true;
      API.saveBook({
        title: formObject.title,
        authors: formObject.author,
        description: formObject.description,
        imageURL: formObject.image,
        link: formObject.link
      })
        .then(res => loadBooks())
        .catch(err => console.log(err));
    }
  };

  return (
    <>
    <Header/>
    <Main 
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
        deleteBook={deleteBook}
        both={bothTitleAuthor}
        />
    <Footer/>
    </>
  );
}

// import { Link } from "react-router-dom";
// import DeleteBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";