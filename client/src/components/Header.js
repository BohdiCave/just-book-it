import React from 'react';
import {useLocation} from 'react-router-dom';

export default function Header() {
    const location = useLocation();
    const address = location.pathname;
    return(
        <header>
            <h1>Just Book It!</h1>
            {address==='/books' || address==='/' 
            ? (<>
                <h2>Search the new Google Books API</h2>
                <span><a href="/saved">View Saved Books</a></span>
            </>) : (<>
                <h2>Saved books</h2>
                <span><a href="/">Search for more books</a></span>
            </>) 
            }
        </header>
    );
}
