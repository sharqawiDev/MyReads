import React from "react"
import BooksGrid from "./BooksGrid"
import PropTypes from "prop-types"

const BookShelf = (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={props.books} changeShelf={props.changeShelf} />
            </div>
        </div>
    )
}

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default BookShelf;