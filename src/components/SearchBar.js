import React from "react"
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
const SearchBar = (props) => {
    return (
        <div className="search-books-bar">
            <Link
                to="/"
                onClick={() => props.updateQuery("")}
                className="close-search"
            >Close</Link>
            <div className="search-books-input-wrapper">
                {/*
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                <input type="text" placeholder="Search by title or author"
                    value={props.query} onChange={(event) => props.updateQuery(event.target.value)} />

            </div>
        </div>
    )
}

SearchBar.PropTypes = {
    query: PropTypes.string.isRequired,
    updateQuery: PropTypes.func.isRequired
}

export default SearchBar;