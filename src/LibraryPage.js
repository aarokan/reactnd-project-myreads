import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class LibraryPage extends React.Component {
    shelves = [
        { key: 'currentlyReading', category: 'currentlyReading', title: 'Currently Reading' },
        { key: 'wantToRead', category: 'wantToRead', title: 'Want to Read' },
        { key: 'read', category: 'read', title: 'read' },
    ];  
    
    clickCurrentlyReading = () => {
        this.props.onUpdateBook(this.props.books[0], 'currentlyReading')
            //.then((res) => this.props.onUpdateBook);
    };

    clickWantToRead = () => {
        this.props.onUpdateBook(this.props.books[0], 'wantToRead');
    };



    render() {
        // Map through shelves array to create the 3 BookShelf
        const bookShelves = this.shelves.map((shelf) => (
            <BookShelf 
                key={shelf.key} 
                category={shelf.category} 
                title={shelf.title} 
                books={this.props.books}
                onUpdateBook={this.props.onUpdateBook}
            />
            ) 
        );
        

        return (
            <div>
                <button onClick={this.clickCurrentlyReading}>currentlyReading</button>
                <button onClick={this.clickWantToRead}>wantToRead</button>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                        <div className="list-books-content">
                            <div>
                                {bookShelves}
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