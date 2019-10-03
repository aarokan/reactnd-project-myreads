import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import LibraryPage from './LibraryPage'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  // Store books on the state so we can update it and pass it to the children component
  state = {
    books: [],
    currentlyReading: [],
    read: [],
    wantToRead: []
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

  updateBook = (oldCategory, movedBook, newShelf) => {
    console.log('PrevState', this.state.books);
    console.log('newShelf', newShelf);
    console.log('movedBook', movedBook);
    console.log('oldCategory', oldCategory);
    const p = BooksAPI.update(movedBook, newShelf).then((res) => console.log('res', res));
    console.log('p', p);

    let updatedBooks = [];
    updatedBooks = this.state.books.filter(book => (
      book.id !== movedBook.id
    ));

    movedBook.shelf = newShelf;

    updatedBooks = updatedBooks.concat(movedBook)

    this.setState({
      books: updatedBooks
    });
  }
    /*
    this.setState((currentState) => {
      books: currentState.books.map((book) => {
        if (book.id === MovedBook.id) {
          book.shelf = newShelf;
          return book;
        }
      })
    })
    
    
    this.setState({
      books: MovedBook.shelf = newShelf
    })
    
    
    this.setState((prevState) => {
      books: prevState.books.filter(book => {
        return (book.shelf === newShelf || book.shelf === oldCategory)
      });
    });
    
    console.log('updatedState', this.state.books);
  }; 
  */

  render() {
    console.log('books', this.state.books)
    return (
      <div>
        <button onClick={this.updateBook}>Update Book</button>
        { /* */}
        <Route exact path='/' render={() => (
          <LibraryPage books={this.state.books} onUpdateBook={this.updateBook} />
        )} />
        <Route path='/search' render={() => (
          <SearchPage />
        )} />
        {/* */}
      </div>
    )
  }
}

export default BooksApp