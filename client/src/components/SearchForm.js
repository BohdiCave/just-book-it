import React from 'react';

export default function SearchForm({input}) {
    return(
        <section id="search-form">
            <form>                 
                <input onChange={input} name="title" placeholder="Search by title" />
                <input onChange={input} name="author" placeholder="Search by author" />
            </form>
        </section>
    );
}

