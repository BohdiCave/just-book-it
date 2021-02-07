import React, { useState, useEffect } from "react";
import API from "../utils/API";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import useDebounce from "../utils/debounceHook";

export default function Search() {
  // Setting our component's initial state
  const [search, setSearch] = useState("inauthor:poe");
  const [books, setBooks] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name==="title") {
      setSearch("intitle:"+value);
    }  
    if (name==="author") {
      setSearch("inauthor:"+value);
    }
  };

  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    
    if (debouncedSearchTerm) {
      setIsSearching(true);
      // Making a call to Google Books API
      API.getGB(debouncedSearchTerm)
        .then(res => {
          setIsSearching(false);
          console.log(res);
          setBooks(res.data.items.map(item => 
            item = {
              _id: item.id,
              title: item.volumeInfo.title,
              authors: item.volumeInfo.authors[0],
              description: item.volumeInfo.description,
              image: item.volumeInfo.imageLinks.thumbnail,
              link: item.selfLink
            }));
          })
        .catch(err => console.log(err));
    }
  }, [debouncedSearchTerm]);


  // When the "save" button is pushed, use the API.saveBook method,
  // save the book data from the search results to the database, 
  // then stay on the search page, but activate the "saved" page link.
  function handleBookSave(event) {
    event.preventDefault();
    let bookData; 
    const btn = event.target;
    const id = btn.getAttribute("id");
    for (let i = 0; i < books.length; i++) {
      if (books[i]._id === id) { 
        bookData = books[i];
      }
    }
    API.saveBook(bookData)        
      .then(res => { 
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
    <Header/>
    <Main 
        input={handleInputChange}
        save={handleBookSave}
        books={books}
        />
    <Footer/>
    </>
  );
}