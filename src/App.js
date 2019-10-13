import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import LibraryPage from './LibraryPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  // Store books on the state so we can update it and pass it to the children component
  state = {
    books: []
  };

  // A lifecycle event so we can fetch our data after the component is rendered
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  };

  // Update the book with the new shelf that chosen by the user
  updateBook = (movedBook, newShelf) => {
    BooksAPI.update(movedBook, newShelf)

    // filter out the movedBook
    let updatedBooks = [];
    updatedBooks = this.state.books.filter(book => (
      book.id !== movedBook.id
    ));

    // update movedBook with the new shelf then add it to the books
    movedBook.shelf = newShelf;
    updatedBooks = updatedBooks.concat(movedBook)

    this.setState({
      books: updatedBooks
    });
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <LibraryPage books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
        <Route path='/search' render={() => (
          <SearchPage books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
      </div>
    )
  }
}

export default BooksApp