import React from "react"
import PropTypes from 'prop-types';

const Book = (props) => {
    const { book, changeShelf } = props;
    return (
        <div className="book">
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book["imageLinks"] !== undefined ? book["imageLinks"]["thumbnail"] : ""})` }}></div>
                <div className="book-shelf-changer">
                    <select defaultValue={book.shelf === undefined ? "none" : book.shelf} onChange={(e) => {
                        book.shelf = e.target.value
                        changeShelf(book, e.target.value)
                    }}>
                        <option value="move" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{(book.title !== undefined) && book.title}</div>
            {(book.authors !== undefined) && book.authors.map(author => <div key={author} className="book-authors">{author}</div>)}

        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
}

export default Book;