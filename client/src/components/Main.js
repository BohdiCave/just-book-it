import React from 'react';
import {useLocation} from 'react-router-dom';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';

export default function Main(props) {
    const location = useLocation();
    const address = location.pathname;

    return(
        <>
        {address==="/" 
        && <SearchForm input={props.input}/>}
        <SearchResults {...props} />
        </>
    );
}
