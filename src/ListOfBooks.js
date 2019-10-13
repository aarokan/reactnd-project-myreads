import React from 'react'
import './App.css'
import ShelfChanger from './ShelfChanger'

class ListOfBooks extends React.Component {
    render() {
        const {category, books, onUpdateBook} = this.props;
        
        // Map through books and return only the books that related to the shelf
        const shelfBookList = books.map(book => {
            if (book.shelf === category) {
                return (
                    <li key={book.title}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <ShelfChanger 
                                    category={category} 
                                    book={book} 
                                    onUpdateBook={onUpdateBook}
                                /> 
                            </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.join(', ')}</div>
                        </div>
                    </li>
                )
            } 
        });

        return (
            <ol className="books-grid">
                {shelfBookList}
            </ol>
        )
    }
}

export default ListOfBooks