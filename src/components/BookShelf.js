import React from "react"
import BooksGrid from "./BooksGrid"
export default (props) => {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <BooksGrid books={props.books} changeShelf={props.changeShelf} />
            </div>
        </div>
    )
}