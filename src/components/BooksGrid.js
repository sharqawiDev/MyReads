import React from "react"
import Book from "./Book"
import PropTypes from 'prop-types';

const BooksGrid = (props) => {
    return (
        <ol className="books-grid">
            {props.books !== undefined && props.books.map(book => <Book key={book.id} book={book} changeShelf={props.changeShelf} />)}
        </ol>
    )
}

BooksGrid.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BooksGrid;