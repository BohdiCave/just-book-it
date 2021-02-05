import React from 'react';
import Card from './Card';

export default function SearchResults(props) {
    const books = props.books;
    return(
        <section id="search-results">
            {books.length ? 
                (books.map(book => 
                    <Card key={book._id} 
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        imageURL={book.imageURL}
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