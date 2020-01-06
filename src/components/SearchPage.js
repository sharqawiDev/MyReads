import React, { Component } from "react"
import * as BooksAPI from "../BooksAPI"
import SearchBar from "./SearchBar"
import BooksGrid from "./BooksGrid"
export default class SearchPage extends Component {
    state = {
        books: [],
        query: ""
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }), () => {
            BooksAPI.search(query).then(books => {
                if (Array.isArray(books)) {
                    const bookIDs = this.props.books.map(book => book.id)
                    const merged = books.map(book => {
                        return bookIDs.indexOf(book.id) !== -1 ? this.props.books.filter(b => b.id === book.id)[0] : book
                    })
                    this.setState({ books: merged })
                } else {
                    this.setState({ books: [] })
                }
            })
        })
    }
    render() {
        return (
            <div className="search-books">
                <SearchBar goBack={this.props.goBack} query={this.state.query} updateQuery={this.updateQuery} />
                <div className="search-books-results">
                    <BooksGrid books={this.state.books} changeShelf={this.props.changeShelf} />
                </div>
            </div>
        )
    }
}