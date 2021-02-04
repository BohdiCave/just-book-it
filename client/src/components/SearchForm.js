import React from 'react';

export default SearchForm(props) {
    return(
        <section id="search-form">
            <form>                 
                <Input onChange={props.handleInputChange} name="title" placeholder="Search by title" />
                <Input onChange={props.handleInputChange} name="author" placeholder="Search by author" />
                <Btn name="search" disabled={props.both ? true : false} onClick={props.handleFormSubmit}/>
            </form>
        </section>
    );
}

