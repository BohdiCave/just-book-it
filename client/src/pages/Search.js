import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";

export default function Search() {
    
  // Setting our component's initial state
  const [books, setBooks] = useState(
    [{   
        _id: "",  
        title: "",
        authors: [],
        description: "",
        imageURL: "",
        link: ""
    }]
  );

  const [searchTerms, setSearchTerms] = useState({
      title: undefined,
      author: undefined
  });

  // Load all books and store them with setBooks
  useEffect(() => {
    API.getGB("inauthor:poe")
    .then(res => {
        console.log(res);
        res.data.items.map(item => {
            setBooks({
                _id: item.id,
                title: item.volumeInfo.title,
                authors: item.volumeInfo.authors[0],
                description: item.volumeInfo.description,
                imageURL: item.volumeInfo.imageLinks.thumbnail,
                link: item.selfLink});        
        });
    })
    .catch(err => console.log(err));
  }, [books])

  function loadSaved() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  // Making a call to Google Books API
  function apiCall() {
    let query;
    if (searchTerms.title && searchTerms.author) {
        query = `intitle:${searchTerms.title}+inauthor:${searchTerms.author}`;
    } else if (searchTerms.title && !(searchTerms.author)) {
        query = `intitle:${searchTerms.title}`;
    } else {
        query = `inauthor:${searchTerms.author}`;
    }
    API.getGB(query)
       .then(res => setBooks(...books, {
        _id: res.data.id,
        title: res.data.volumeInfo.title,
        authors: res.data.volumeInfo.authors,
        description: res.data.description,
        imageURL: res.data.imageLinks.medium,
        link: res.data.selfLink
    }))
       .catch(err => console.log(err));
  }
  
  // Deletes a book from the database with a given id, then reloads books from the db
  function bookDelete(id) {
    API.deleteBook(id)
      .then(res => loadSaved())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setSearchTerms({[name]: value});
    setTimeout(() => {
        apiCall();    
    }, 1000);
  };

  // When the "save" button is pushed, use the API.saveBook method,
  // save the book data from the search results to the database, 
  // then stay on the search page, but activate the "saved" page link.
  function handleBookSave(event) {
    event.preventDefault(); 
    const btn = event.target;
    API.saveBook({
        _id: btn.key,
        title: btn.title,
        authors: btn.authors,
        description: btn.description,
        imageURL: btn.imageURL,
        link: btn.link
      })        
      .then(res => console.log(res)) /* stay on the search page, but activate the "saved" link */
      .catch(err => console.log(err));
  };

  return (
    <>
    <Header/>
    <Main 
        input={handleInputChange}
        save={handleBookSave}
        delete={bookDelete}
        books={books}
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