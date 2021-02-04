import React from 'react';

export default SearchForm() {
    let titleArg = "";
    let authorArg = "";
    return(
        <section id="search-form">
            <form>
                <input type="text" name="title" placeholder="Search by the Title" value={titleArg} />
                <input type="text" name="author" placeholder="Search by the Author" value={authorArg} />
                <button type="submit" id="search">Search</button> 
            </form>
        </section>
    );
}