import React from 'react';
import {useLocation} from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function Main() {
    const location = useLocation();
    const address = location.pathname;

    return(
        <>
        {address==="/" || address==="/books" && <SearchForm />}
        <SearchResults />
        </>
    );
}
