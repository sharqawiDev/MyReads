import React from "react"

export default (props) => {
    return (
        <div className="search-books-bar">
            <button className="close-search" onClick={props.goBack}>Close</button>
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