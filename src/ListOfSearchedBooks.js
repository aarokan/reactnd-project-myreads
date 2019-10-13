import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger'

class ListOfSearchedBooks extends React.Component {
    render() {
        const {onUpdateBook, searchedBooks} = this.props;
        
        // Map through books and return the searched books
        const shelfBookList = searchedBooks.map((book, index) => {            
        
            return (
                <li key={index}>
                    <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail})` }}></div>
                            <ShelfChanger 
                                category={book.shelf ? book.shelf : 'none'} 
                                book={book} 
                                onUpdateBook={onUpdateBook}
                            /> 
                        </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors && book.authors.join(', ')}</div>
                    </div>
                </li>
            )
        });

        return (
            <ol className="books-grid">
                {shelfBookList}
            </ol>
        )
    }
}

export default ListOfSearchedBooks