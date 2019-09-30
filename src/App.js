import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import LibraryPage from './LibraryPage'
import SearchPage from './SearchPage'

class App extends React.Component {
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

  render() {
    return (
      <div>
        { /* */}
        <Route exact path='/' render={() => (
          <LibraryPage books={this.state.books} />
        )} />
        <Route path='/search' render={() => (
          <SearchPage />
        )} />
        {/* */}
      </div>
    )
  }
}

export default App