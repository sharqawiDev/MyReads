import React, { Component } from 'react'
import { Route, Link } from "react-router-dom"
import * as BooksAPI from './BooksAPI'
import Header from "./components/Header"
import Shelves from "./components/Shelves"
import SearchPage from "./components/SearchPage"
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState((prevState) => ({
        books: prevState.books.filter(b => b.id !== book.id).concat([book])
      }))
    })
  }


  render() {
    return (
      <div className="app">

        <Route
          path="/search"
          render={() => (
            <SearchPage books={this.state.books} changeShelf={this.changeShelf} />
          )}
        />
        <Route
          exact path="/"
          render={() => (
            <div className="list-books">
              <Header title="MyReads" />
              <Shelves books={this.state.books} changeShelf={this.changeShelf} />
              <div className="open-search">
                <Link
                  to="/search"
                ><button>Add books</button></Link>
              </div>
            </div>
          )} />

      </div>
    )
  }
}

export default BooksApp
