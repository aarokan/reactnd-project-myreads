import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import LibraryPage from './LibraryPage'
import SearchPage from './SearchPage'

const shelves = [
  {key: 1, title: 'Currently Reading'},
  {key: 2, title: 'Want to Read'},
  {key: 3, title: 'Read'},
];

class App extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div>
        { /* */}
        <Route exact path='/' render={() => (
          <LibraryPage shelves={shelves} />
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
