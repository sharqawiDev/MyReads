import React from "react"
import Book from "./Book"

export default (props) => {
    return (
        <ol className="books-grid">
            {props.books !== undefined && props.books.map(book => <Book key={book.id} book={book} changeShelf={props.changeShelf} />)}
        </ol>
    )
}