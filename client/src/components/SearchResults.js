import React from 'react';
import {useLocation} from 'react-router-dom';

export default SearchResults({books}) {
    const location = useLocation();
    const address = location.pathname;

    return(
        <section id="search-results">
            {books.length ? 
                (books.map(book => 
                    {<Card key={book._id}>
                        <Link to={"/books/" + book._id}>
                            <strong>
                            {book.title} by {book.author}
                            </strong>
                        </Link>
                        {address==="/books" ? 
                          <Btn name="save" onClick={() => saveBook({book})} />
                        : <Btn name="delete" onClick={() => deleteBook(book._id)} />}
                    </Card>}
                )) 
            : (<h3>No Results to Display</h3>)
            } 
        </section>
    );
}