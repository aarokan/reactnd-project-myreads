import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class LibraryPage extends React.Component {
    render() {
        console.log(this.props);
        return(
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                        <div className="list-books-content">
                            <div>
                                <BookShelf />
                            </div>
                        </div>
                    <div className="open-search">
                        {/* Link component to navigate to the search page */}
                        <Link to='/search'><button>Add a book</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default LibraryPage