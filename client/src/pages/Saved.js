import React, { useState, useEffect } from "react";
import API from "../utils/api";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

export default function Saved() {

    // Setting our component's initial state
    const [savedBooks, setSavedBooks] = useState([]);

    useEffect(() => {
        // Getting saved books from the database
        API.getBooks()
            .then(res => {
              console.log(res);
              setSavedBooks(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    // Loads saved books 
    function loadSaved() {
        API.getBooks()
        .then(res => 
            setSavedBooks(res.data)
        )
        .catch(err => console.log(err));
    };
    
    // Deletes a book from the database with a given id, then reloads books from the db
    function handleBookDelete(event) {
        event.preventDefault();
        const btn = event.target;
        const id = btn.id;
        API.deleteBook(id)
            .then(res => loadSaved())
            .catch(err => console.log(err));
    }

    return(
        <>
        <Header/>
        <Main 
            savedBooks={savedBooks} 
            delete={handleBookDelete}
            />
        <Footer/>
        </>
    );
}