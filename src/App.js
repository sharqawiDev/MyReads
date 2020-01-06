import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    showSearchPage: false
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

  back = () => this.setState({ showSearchPage: false })


  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchPage goBack={this.back} books={this.state.books} changeShelf={this.changeShelf} />
        ) : (
            <div className="list-books">
              <Header title="MyReads" />
              <Shelves books={this.state.books} changeShelf={this.changeShelf} />
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
            </div>
          )}
      </div>
    )
  }
}
class Header extends Component {
  render() {
    return (
      <div className="list-books-title">
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}
class Shelves extends Component {
  render() {
    const cr = this.props.books.filter(book => book.shelf === "currentlyReading")
    const wtr = this.props.books.filter(book => book.shelf === "wantToRead")
    const r = this.props.books.filter(book => book.shelf === "read")
    return (
      <div className="list-books-content">
        <div>
          <BookShelf key="cr" title="Currently Reading" books={cr} changeShelf={this.props.changeShelf} />
          <BookShelf key="wtr" title="Want to Read" books={wtr} changeShelf={this.props.changeShelf} />
          <BookShelf key="r" title="Read" books={r} changeShelf={this.props.changeShelf} />
        </div>
      </div>
    )
  }
}
class BookShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <BooksGrid books={this.props.books} changeShelf={this.props.changeShelf} />
        </div>
      </div>
    )
  }
}
class BooksGrid extends Component {
  render() {
    return (
      <ol className="books-grid">
        {this.props.books !== undefined && this.props.books.map(book => <Book key={book.id} book={book} changeShelf={this.props.changeShelf} />)}
      </ol>
    )
  }

}
class Book extends Component {
  render() {
    const { book } = this.props;
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book["imageLinks"] !== undefined ? book["imageLinks"]["thumbnail"] : ""})` }}></div>
          <div className="book-shelf-changer">
            <select defaultValue={book.shelf === undefined ? "none" : book.shelf} onChange={(e) => {
              book.shelf = e.target.value
              this.props.changeShelf(book, e.target.value)
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
}
class SearchBar extends Component {
  render() {
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={this.props.goBack}>Close</button>
        <div className="search-books-input-wrapper">
          {/*
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
          <input type="text" placeholder="Search by title or author"
            value={this.props.query} onChange={(event) => this.props.updateQuery(event.target.value)} />

        </div>
      </div>
    )
  }
}

class SearchPage extends Component {
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

export default BooksApp
