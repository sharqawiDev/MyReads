import React from "react"
import BookShelf from "./BookShelf"

export default (props) => {
    const cr = props.books.filter(book => book.shelf === "currentlyReading")
    const wtr = props.books.filter(book => book.shelf === "wantToRead")
    const r = props.books.filter(book => book.shelf === "read")
    return (
        <div className="list-books-content">
            <div>
                <BookShelf key="cr" title="Currently Reading" books={cr} changeShelf={props.changeShelf} />
                <BookShelf key="wtr" title="Want to Read" books={wtr} changeShelf={props.changeShelf} />
                <BookShelf key="r" title="Read" books={r} changeShelf={props.changeShelf} />
            </div>
        </div>
    )
}