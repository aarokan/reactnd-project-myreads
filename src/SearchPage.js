import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { search } from './BooksAPI'
import ListOfSearchedBooks from './ListOfSearchedBooks';

class SearchPage extends React.Component {
    state = {
        query: '',
        searchedBooks: [],
    };

    handleChange = event => {
        this.setState({
            query: event.target.value
        })

        if (this.state.query.length > 0) {
            this.updateSearchedBooks(event.target.value);
        } else {
            // There is no input value so empty the searchedBook and re-render 
            this.setState({searchedBooks: []})
        }
    }

    updateSearchedBooks = (query) => {
        // Get the searched books from the API
        search(query)
            .then((res) => {
                // Check if the returned response is an array
                if (Array.isArray(res)) {
                    // Add a shelf to the searchedBooks items according to our books
                    const fixSearchedBooks = res.map(searchedBook => {
                        this.props.books.map(myBook => {
                            if (myBook.id === searchedBook.id) {
                                searchedBook.shelf = myBook.shelf;
                            }
                            return myBook;
                        });
                        return searchedBook;
                    });

                    this.setState({searchedBooks: fixSearchedBooks})

                } else {
                    // no array was returned so empty the searchedBooks
                    this.setState({searchedBooks: []})
                }
            })
            .catch(err => { 
                console.log(err)
                this.setState({searchedBooks: []})
            })
    }

    render() {
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    {/* Link component to navigate to main page */}
                    <Link to='/'><button className="close-search">Close</button></Link>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input 
                            type="text" 
                            placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={this.handleChange}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListOfSearchedBooks 
                        books={this.props.books}
                        onUpdateBook={this.props.onUpdateBook}
                        searchedBooks={this.state.searchedBooks}
                    />
                </div>
          </div>
        )
    }
}

export default SearchPage