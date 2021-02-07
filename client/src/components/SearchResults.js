import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from './Card';

export default function SearchResults(props) {
    const location = useLocation();
    const address = location.pathname;
    
    const books = props.books || props.savedBooks;
    
    return(
        <section id="search-results">
            {books.length ? 
                (books.map(book => 
                    <Card key={book._id}
                        id={book._id} 
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        save={props.save}
                        delete={props.delete}
                    />
                )) 
            : (<h3>No Results to Display</h3>)
            } 
        </section>
    );
}